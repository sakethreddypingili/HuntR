'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing property listings.
 *
 * - summarizePropertyListings - A function that takes property details as input and returns a concise summary.
 * - SummarizePropertyListingsInput - The input type for the summarizePropertyListings function.
 * - SummarizePropertyListingsOutput - The return type for the summarizePropertyListings function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePropertyListingsInputSchema = z.object({
  propertyDetails: z
    .string()
    .describe('Detailed description of the property listing.'),
});
export type SummarizePropertyListingsInput = z.infer<
  typeof SummarizePropertyListingsInputSchema
>;

const SummarizePropertyListingsOutputSchema = z.object({
  summary: z
    .string()
    .describe('Concise summary of the property listing details.'),
});
export type SummarizePropertyListingsOutput = z.infer<
  typeof SummarizePropertyListingsOutputSchema
>;

export async function summarizePropertyListings(
  input: SummarizePropertyListingsInput
): Promise<SummarizePropertyListingsOutput> {
  return summarizePropertyListingsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePropertyListingsPrompt',
  input: {schema: SummarizePropertyListingsInputSchema},
  output: {schema: SummarizePropertyListingsOutputSchema},
  prompt: `Summarize the following property listing details, focusing on key features, amenities, and benefits:\n\n{{{propertyDetails}}}`,
});

const summarizePropertyListingsFlow = ai.defineFlow(
  {
    name: 'summarizePropertyListingsFlow',
    inputSchema: SummarizePropertyListingsInputSchema,
    outputSchema: SummarizePropertyListingsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
