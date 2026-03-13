export async function getPesapalToken() {
  const res = await fetch(
    process.env.PESAPAL_BASE_URL + "/api/Auth/RequestToken",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        consumer_key: process.env.PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
      }),
    }
  );

  const data = await res.json();
  return data.token;
}

export async function createPesapalOrder(data: {
  reference: string;
  amount: number;
  currency: string;
  name?: string;
  email?: string;
  phone?: string;
}) {
  const token = await getPesapalToken();

  const res = await fetch(
    process.env.PESAPAL_BASE_URL + "/api/Transactions/SubmitOrderRequest",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: data.reference,
        currency: data.currency,
        amount: data.amount,
        description: "Donation to SISO Foundation",
        callback_url:
          process.env.NEXT_PUBLIC_SITE_URL + "/api/pesapal/callback",
        notification_id: process.env.PESAPAL_NOTIFICATION_ID,
        billing_address: {
          email_address: data.email,
          phone_number: data.phone,
          country_code: "UG",
          first_name: data.name || "Donor",
        },
      }),
    }
  );

  return res.json();
}

export async function getTransactionStatus(orderTrackingId: string) {
  const token = await getPesapalToken();

  const res = await fetch(
    `${process.env.PESAPAL_BASE_URL}/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
}