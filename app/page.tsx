'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Star, Sparkles, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import NewsletterForm from '@/components/NewsletterForm';
import StarfieldAnimation from '@/components/StarfieldAnimation';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <StarfieldAnimation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Sirio Star
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            L&apos;attesa sta per finire
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Rivoluziona il tuo stile con le tute che ti porteranno in un&apos;altra dimensione
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
            onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Iscriviti alla newsletter
          </Button>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            La Collezione
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-black/30 backdrop-blur-lg border-purple-500/20 overflow-hidden group">
              <div className="relative aspect-square">
                <img
                  src="https://i.imgur.com/XYZabc.jpg" // Replace with actual mockup image URL
                  alt="Sirio Star Hoodie"
                  className="object-cover w-full h-full rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">Sirio Hoodie</h3>
                <p className="text-gray-400">Design ispirato alle stelle</p>
              </div>
            </Card>
            <Card className="p-6 bg-black/30 backdrop-blur-lg border-purple-500/20 overflow-hidden group">
              <div className="relative aspect-square">
                <img
                  src="https://i.imgur.com/DEFghi.jpg" // Replace with actual mockup image URL
                  alt="Sirio Star Pants"
                  className="object-cover w-full h-full rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">Sirio Pants</h3>
                <p className="text-gray-400">Comfort galattico</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Chi Siamo</h2>
          <Card className="p-8 bg-black/30 backdrop-blur-lg border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed">
              Sirio Star rappresenta l&apos;incontro tra moda e innovazione. Le nostre tute sono create con materiali 
              all&apos;avanguardia e un design ispirato alle meraviglie dell&apos;universo. Ogni capo è pensato per chi 
              desidera distinguersi con uno stile unico e confortevole.
            </p>
          </Card>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Il lancio si avvicina</h2>
          <CountdownTimer targetDate="2024-05-01" />
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="relative py-24 px-4 bg-gradient-to-t from-transparent to-purple-900/20">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Resta Aggiornato</h2>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-black/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold">Sirio Star</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="mailto:info@siriostar.com" className="hover:text-purple-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2024 Sirio Star. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </main>
  );
}