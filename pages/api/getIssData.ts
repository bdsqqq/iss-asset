const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetchData = async (url: string) => {
  const query = await fetch(url);
  return await query.json();
};

async function getIssData(req: NextApiRequest, res: NextApiResponse) {
  let issData = await fetchData(API_URL);
  res.status(200).json(issData);
}

export default getIssData;

import type { NextApiRequest, NextApiResponse } from "next";
