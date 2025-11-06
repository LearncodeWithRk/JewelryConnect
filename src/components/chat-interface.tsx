'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { handleConsultation } from '@/app/booking/actions';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Send, User, Bot, AlertTriangle, Forward } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { AnimatePresence, motion } from 'framer-motion';

type Message = {
  id: number;
  role: 'user' | 'assistant' | 'system' | 'error';
  content: string;
};

const initialState = {
  userMessage: null,
  aiResponse: null,
  forwarded: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending} aria-label="Send message">
      {pending ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
      ) : (
        <Send className="h-5 w-5" />
      )}
    </Button>
  );
}

export function ChatInterface() {
  const [state, formAction] = useFormState(handleConsultation, initialState);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content:
        "Hi! I'm your AI assistant. How can I help you with your jewelry consultation today? Feel free to ask about styling, custom designs, or booking an appointment.",
    },
  ]);
  const formRef = useRef<HTMLFormElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.userMessage && state.aiResponse) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: 'user', content: state.userMessage },
        { id: Date.now() + 1, role: 'assistant', content: state.aiResponse },
      ]);
      if (state.forwarded) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 2,
            role: 'system',
            content:
              'Your message requires personal attention and has been forwarded to the influencer. They will get back to you shortly.',
          },
        ]);
      }
      formRef.current?.reset();
    } else if (state.error) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: 'error', content: state.error },
      ]);
    }
  }, [state]);

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-96">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-6">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={cn('flex items-end gap-3', {
                  'justify-end': message.role === 'user',
                })}
              >
                {message.role === 'assistant' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                 <div
                  className={cn('max-w-xs md:max-w-md rounded-2xl p-3 text-sm', {
                    'bg-primary text-primary-foreground rounded-br-none': message.role === 'user',
                    'bg-muted rounded-bl-none': message.role === 'assistant',
                    'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800/70 text-xs flex items-center gap-2 w-full': message.role === 'system',
                    'bg-destructive/10 text-destructive border border-destructive/20 text-xs flex items-center gap-2 w-full': message.role === 'error',
                  })}
                >
                    {message.role === 'system' && <Forward className="h-4 w-4 flex-shrink-0" />}
                    {message.role === 'error' && <AlertTriangle className="h-4 w-4 flex-shrink-0" />}
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-muted">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <form ref={formRef} action={formAction} className="flex gap-2">
          <Input
            name="message"
            placeholder="Type your message..."
            autoComplete="off"
            className="flex-1"
            required
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
