'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type SeatingOption } from '@/app/register/page';
import { Loader2 } from 'lucide-react';

interface CheckoutFormProps {
  ticket: SeatingOption;
  onCheckoutSuccess: () => void;
}

export default function CheckoutForm({ ticket, onCheckoutSuccess }: CheckoutFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch('https://formspree.io/f/mrbavwag', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        onCheckoutSuccess();
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      action="https://formspree.io/f/mrbavwag"
      method="POST"
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <h3 className="font-semibold text-lg text-primary">{ticket.title}</h3>
        <p className="text-2xl font-bold">{ticket.price}</p>
      </div>

      {/* Hidden fields for submission */}
      <input type="hidden" name="Ticket Type" value={ticket.title} />
      <input type="hidden" name="Price" value={ticket.price} />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input
            id="full-name"
            name="Full Name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          'Complete Registration'
        )}
      </Button>
    </form>
  );
}