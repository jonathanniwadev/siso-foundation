type FlutterwaveCheckoutInput = {
  tx_ref: string;
  amount: number;
  currency: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  message?: string | null;
};

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function getSiteUrl() {
  return getEnv("NEXT_PUBLIC_SITE_URL").replace(/\/$/, "");
}

export async function createFlutterwavePaymentLink(
  input: FlutterwaveCheckoutInput,
) {
  const secretKey = getEnv("FLUTTERWAVE_SECRET_KEY");
  const siteUrl = getSiteUrl();

  const res = await fetch("https://api.flutterwave.com/v3/payments", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tx_ref: input.tx_ref,
      amount: input.amount,
      currency: input.currency,
      redirect_url: `${siteUrl}/api/flutterwave/callback`,
      customer: {
        email: input.email || "donor@sisofoundation.org",
        name: input.name || "Donor",
        phonenumber: input.phone || undefined,
      },
      customizations: {
        title: "SISO Foundation Donation",
        description:
          input.message?.trim() ||
          "Donation to support SISO Foundation programs in Uganda",
        logo: `${siteUrl}/sisologo.jpeg`,
      },
    }),
    cache: "no-store",
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || data?.status !== "success" || !data?.data?.link) {
    throw new Error(
      data?.message || data?.error || "Failed to create Flutterwave payment link",
    );
  }

  return {
    payment_link: data.data.link as string,
  };
}

export async function verifyFlutterwaveTransaction(transactionId: string) {
  const secretKey = getEnv("FLUTTERWAVE_SECRET_KEY");

  const res = await fetch(
    `https://api.flutterwave.com/v3/transactions/${transactionId}/verify`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  const data = await res.json().catch(() => null);

  if (!res.ok || data?.status !== "success" || !data?.data) {
    throw new Error(
      data?.message || data?.error || "Failed to verify Flutterwave transaction",
    );
  }

  return data.data as {
    id: number;
    tx_ref: string;
    status: string;
    amount: number;
    currency: string;
    customer?: {
      email?: string;
      name?: string;
      phone_number?: string;
    };
  };
}