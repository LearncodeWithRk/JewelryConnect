'use server';

import { automatedConsultationResponses } from '@/ai/flows/automated-consultation-responses';
import { z } from 'zod';

const formSchema = z.object({
  message: z.string().min(1, 'Message is required').max(500, 'Message is too long'),
});

type ConsultationState = {
  userMessage: string | null;
  aiResponse: string | null;
  forwarded: boolean | null;
  error: string | null;
};

export async function handleConsultation(
  prevState: ConsultationState,
  formData: FormData
): Promise<ConsultationState> {
  try {
    const validatedFields = formSchema.safeParse({
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        ...prevState,
        error: validatedFields.error.errors[0].message,
      };
    }

    const { message } = validatedFields.data;

    const result = await automatedConsultationResponses({ message });

    return {
      userMessage: message,
      aiResponse: result.response,
      forwarded: result.sendToInfluencer,
      error: null,
    };
  } catch (error) {
    console.error('Consultation action error:', error);
    return {
      userMessage: formData.get('message') as string,
      aiResponse: null,
      forwarded: null,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
