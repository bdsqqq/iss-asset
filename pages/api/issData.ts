const fetchData = async (url: string) => {
  const query = await fetch(url);
  return await query.json();
};

const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

const getIssData = async (fetcher: any, API_URL: string) => {
  const cacheKey = "issData";

  let cacheEntry = await redis.get(cacheKey);

  if (cacheEntry) {
    let jsonCacheEntry: object = JSON.parse(cacheEntry);
    return { ...jsonCacheEntry, source: "cache" };
  }

  let issData = await fetcher(API_URL);
  redis.set(cacheKey, JSON.stringify(issData), "EX", 12);

  return { ...issData, source: "api" };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let issData = await getIssData(fetchData, API_URL);
  res.status(200).json(issData);
};

import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../lib/redis";
