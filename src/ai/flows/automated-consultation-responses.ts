'use server';

/**
 * @fileOverview A flow that handles automated consultation responses via WhatsApp.
 *
 * - automatedConsultationResponses - A function to process consultation requests and provide automated responses.
 * - ConsultationInput - The input type for the automatedConsultationResponses function.
 * - ConsultationOutput - The return type for the automatedConsultationResponses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ConsultationInputSchema = z.object({
  message: z.string().describe('The user message from WhatsApp.'),
});

export type ConsultationInput = z.infer<typeof ConsultationInputSchema>;

const ConsultationOutputSchema = z.object({
  response: z.string().describe('The automated response to the user.'),
  sendToInfluencer: z
    .boolean()
    .describe(
      'Whether the message should be sent to the influencer for personal handling.'
    ),
});

export type ConsultationOutput = z.infer<typeof ConsultationOutputSchema>;

export async function automatedConsultationResponses(
  input: ConsultationInput
): Promise<ConsultationOutput> {
  return automatedConsultationResponsesFlow(input);
}

const determineConsultationType = ai.defineTool({
  name: 'determineConsultationType',
  description: 'Determines the type of consultation the user is requesting.',
  inputSchema: z.object({
    message: z.string().describe('The user message to analyze.'),
  }),
  outputSchema: z.enum([
    'jewelryStyling',
    'customDesign',
    'generalInquiry',
    'unknown',
  ]),
  async (input) => {
    // Basic implementation, can be expanded with more sophisticated logic
    const message = input.message.toLowerCase();
    if (message.includes('styling') || message.includes('style')) {
      return 'jewelryStyling';
    } else if (message.includes('design') || message.includes('custom')) {
      return 'customDesign';
    } else if (message.includes('inquiry') || message.includes('question')) {
      return 'generalInquiry';
    } else {
      return 'unknown';
    }
  },
});

const prompt = ai.definePrompt({
  name: 'consultationResponsePrompt',
  input: {schema: ConsultationInputSchema},
  output: {schema: ConsultationOutputSchema},
  tools: [determineConsultationType],
  system: `You are an AI assistant helping a jewelry influencer manage consultation requests on WhatsApp.
  Based on the user's message, provide an appropriate automated response. If the request is complex or requires personal attention,
  set sendToInfluencer to true. Otherwise, provide a helpful response and set sendToInfluencer to false.

  Consider these consultation options:
  - Jewelry Styling: Help the user find the perfect jewelry to match their style.
  - Custom Design: Discuss creating unique, custom-designed jewelry pieces.
  - General Inquiries: Answer general questions about products, services, or the influencer.
  
  If the user is asking about booking a consultation, suggest available time slots and ask for their preferred date and time.
  If the user is asking a complex question or something not easily answered, set "sendToInfluencer" to true and set the response to "Let me check with the team and get back to you soon!"

  Here are example responses:
  {
  "response": "Hi! 👋 I'm [Your Name], the jewelry expert. What kind of consultation are you looking for today? Jewelry Styling? Custom Designs? Let me know and I'll assist you!",
  "sendToInfluencer": false
  }

  {
  "response": "Let me check with the team and get back to you soon!",
  "sendToInfluencer": true
  }

  If you can not determine the type of inquiry, set sendToInfluencer to true and respond with a similar message as above.
  `,
  prompt: `User message: {{{message}}}`,
});

const automatedConsultationResponsesFlow = ai.defineFlow(
  {
    name: 'automatedConsultationResponsesFlow',
    inputSchema: ConsultationInputSchema,
    outputSchema: ConsultationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
