export default async () => {
  const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";
  const { latitude, longitude } = await fetch(API_URL).then((res) =>
    res.json()
  );

  return new Response(JSON.stringify({ latitude, longitude }), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-Control": "s-maxage=1, stale-while-revalidate",
    },
  });
};

export const config = {
  runtime: "experimental-edge",
};
