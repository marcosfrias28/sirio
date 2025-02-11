'use client';

import { useState } from 'react';
// import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  // const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement newsletter signup logic here
    // toast({
    //   title: "Iscrizione completata!",
    //   description: "Grazie per esserti iscritto alla nostra newsletter.",
    // });
    setEmail('');
  };

  return (
    <Card className="p-6 bg-black/50 backdrop-blur-lg border-purple-500/20">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Il tuo indirizzo email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-purple-500/20 text-white placeholder:text-gray-400"
          required
        />
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
          Iscriviti
        </Button>
      </form>
    </Card>
  );
}