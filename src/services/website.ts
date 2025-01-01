import { MONGO_DB_ID } from "astro:env/server";
import type { IWebsite } from "../model/Website";
import Website from "../model/Website";
import connectMongo from "./mongoConnect";

export async function getWebsite(): Promise<IWebsite> {
  // TODO: Add error handling
  await connectMongo();
  const website = (await Website.findById(MONGO_DB_ID)) as IWebsite;

  return website;
}
