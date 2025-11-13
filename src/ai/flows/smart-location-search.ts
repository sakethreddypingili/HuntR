'use server';

/**
 * @fileOverview AI-powered property search using natural language queries.
 *
 * - smartLocationSearch - A function that handles property searches based on user queries.
 * - SmartLocationSearchInput - The input type for the smartLocationSearch function.
 * - SmartLocationSearchOutput - The return type for the smartLocationSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartLocationSearchInputSchema = z.object({
  query: z
    .string()
    .describe(
      'The user query for property search, e.g., PG near tech park.'
    ),
});
export type SmartLocationSearchInput = z.infer<typeof SmartLocationSearchInputSchema>;

const SmartLocationSearchOutputSchema = z.object({
  location: z.string().describe('The identified location from the query.'),
  propertyType: z.string().describe('The type of property being searched for (e.g., PG, 1 BHK).'),
});
export type SmartLocationSearchOutput = z.infer<typeof SmartLocationSearchOutputSchema>;

export async function smartLocationSearch(input: SmartLocationSearchInput): Promise<SmartLocationSearchOutput> {
  return smartLocationSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartLocationSearchPrompt',
  input: {schema: SmartLocationSearchInputSchema},
  output: {schema: SmartLocationSearchOutputSchema},
  prompt: `You are an AI assistant designed to extract location and property type from user search queries.

  Given the following user query, identify the location and the type of property they are looking for.

  Query: {{{query}}}

  Return the location and property type in the JSON format.
  `,
});

const smartLocationSearchFlow = ai.defineFlow(
  {
    name: 'smartLocationSearchFlow',
    inputSchema: SmartLocationSearchInputSchema,
    outputSchema: SmartLocationSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
