'use client';

import type { HistoricalFigure } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';
import { getSummary } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

interface ProfileCardProps {
  figure: HistoricalFigure;
}

export default function ProfileCard({ figure }: ProfileCardProps) {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSummary = async () => {
      setLoading(true);
      const result = await getSummary(figure.biography);
      if (result.startsWith('Could not generate')) {
        toast({
          title: "AI Error",
          description: "The AI summary could not be generated at this time.",
          variant: "destructive",
        })
        setSummary("The full biography is available for reading.");
      } else {
        setSummary(result);
      }
      setLoading(false);
    };
    fetchSummary();
  }, [figure.biography, toast]);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader>
        <div className="aspect-square relative w-full rounded-md overflow-hidden mb-4">
          <Image
            src={figure.imageUrl}
            alt={`Portrait of ${figure.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={figure.imageHint}
          />
        </div>
        <CardTitle className="font-headline text-2xl">{figure.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow text-muted-foreground">
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <p>{summary}</p>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {figure.roles.map((role) => (
            <Badge key={role} variant="secondary">
              {role}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
