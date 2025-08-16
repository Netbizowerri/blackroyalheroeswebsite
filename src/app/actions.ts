"use server";

import { summarizeBiography } from "@/ai/flows/summarize-biography";

export async function getSummary(biography: string) {
  try {
    const { summary } = await summarizeBiography({ biography });
    return summary;
  } catch (error) {
    console.error("Error summarizing biography:", error);
    return "Could not generate summary at this time.";
  }
}
