'use server';

/**
 * @fileOverview An AI agent to summarize biographies of historical figures.
 *
 * - summarizeBiography - A function that takes biography text and returns a summary.
 * - SummarizeBiographyInput - The input type for the summarizeBiography function.
 * - SummarizeBiographyOutput - The return type for the summarizeBiography function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBiographyInputSchema = z.object({
  biography: z.string().describe('The full biography text to summarize.'),
});
export type SummarizeBiographyInput = z.infer<typeof SummarizeBiographyInputSchema>;

const SummarizeBiographyOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the biography.'),
});
export type SummarizeBiographyOutput = z.infer<typeof SummarizeBiographyOutputSchema>;

export async function summarizeBiography(input: SummarizeBiographyInput): Promise<SummarizeBiographyOutput> {
  return summarizeBiographyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBiographyPrompt',
  input: {schema: SummarizeBiographyInputSchema},
  output: {schema: SummarizeBiographyOutputSchema},
  prompt: `You are an expert biographer specializing in summarizing the lives of historical figures.

  Given the following biography, provide a concise and informative summary highlighting the key events and achievements in their life. The summary should be no more than three sentences.

  Biography: {{{biography}}}
  `,
});

const summarizeBiographyFlow = ai.defineFlow(
  {
    name: 'summarizeBiographyFlow',
    inputSchema: SummarizeBiographyInputSchema,
    outputSchema: SummarizeBiographyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
