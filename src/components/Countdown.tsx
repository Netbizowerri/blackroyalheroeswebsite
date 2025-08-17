'use client';

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export default function Countdown() {
  const calculateTimeLeft = () => {
    // Note: This is a placeholder date. In a real app, this would come from a server.
    const difference = +new Date("2026-08-30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({
      days: 437,
      hours: 16,
      minutes: 5,
      seconds: 57
  });

  useEffect(() => {
    const timer = setTimeout(() => {
        // This is a simplified countdown for display purposes. A real implementation would be more robust.
        setTimeLeft(prev => {
            let { days, hours, minutes, seconds } = prev;
            seconds--;
            if (seconds < 0) { seconds = 59; minutes--; }
            if (minutes < 0) { minutes = 59; hours--; }
            if (hours < 0) { hours = 23; days--; }
            return { days, hours, minutes, seconds };
        });
    }, 1000);

    return () => clearTimeout(timer);
  });
  
  const timerComponents = Object.entries(timeLeft);

  return (
    <section className="my-16 text-center relative py-20 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
            <Image 
                src="https://i.ibb.co/XfyCrQK1/Black-Royal-3-1.jpg"
                alt="Celebration background"
                fill
                className="object-cover"
                data-ai-hint="celebration event background"
            />
            <div className="absolute inset-0 bg-background/80"></div>
        </div>
        <div className="relative z-10 px-4">
            <div className="grid grid-cols-2 sm:grid-flow-col gap-5 text-center auto-cols-max justify-center mb-8">
                {timerComponents.map(([interval, value]) => (
                    <Card key={interval} className="p-4 bg-secondary">
                        <CardContent className="p-2">
                            <span className="font-mono text-5xl text-primary">{String(value).padStart(2, '0')}</span>
                            <span className="block text-sm text-muted-foreground">{interval}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            <Button asChild className="mb-4">
                <Link href="/register">Nominate Your Hero Today</Link>
            </Button>
            <p className="max-w-2xl mx-auto text-foreground/80">
                Join the historic moment. Nominate a Hero who shaped Black excellence in the past 200 years. From Pan-African fighters to global change-makers, this is our time to honor their legacy.
            </p>
            <p className="mt-4 font-bold text-primary">
             Deadline for Nominations & Payments: 30th August 2026
            </p>

            <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="default" variant="default">
                    <Link href="/register">Nominate Now</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                    <Link href="/register">Register Now</Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
