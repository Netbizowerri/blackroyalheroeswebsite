'use client';

import { useState, useMemo } from 'react';
import { historicalFigures } from '@/lib/data';
import ProfileCard from './ProfileCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function ProfileGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRoles, setActiveRoles] = useState<string[]>([]);

  const allRoles = useMemo(() => {
    const roles = new Set<string>();
    historicalFigures.forEach((figure) => {
      figure.roles.forEach((role) => roles.add(role));
    });
    return Array.from(roles).sort();
  }, []);

  const toggleRole = (role: string) => {
    setActiveRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const filteredFigures = useMemo(() => {
    return historicalFigures.filter((figure) => {
      const matchesSearch = figure.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRoles =
        activeRoles.length === 0 ||
        activeRoles.every((role) => figure.roles.includes(role));
      return matchesSearch && matchesRoles;
    });
  }, [searchTerm, activeRoles]);

  return (
    <section className="my-12">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-muted-foreground mr-2">Filter by role:</span>
            {allRoles.map((role) => (
                <Button
                key={role}
                variant={activeRoles.includes(role) ? 'default' : 'secondary'}
                size="sm"
                onClick={() => toggleRole(role)}
                >
                {role}
                </Button>
            ))}
            {activeRoles.length > 0 && (
                <Button variant="ghost" size="sm" onClick={() => setActiveRoles([])}>Clear</Button>
            )}
        </div>
      </div>

      {filteredFigures.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFigures.map((figure) => (
            <ProfileCard key={figure.id} figure={figure} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No heroes found matching your criteria.</p>
        </div>
      )}
    </section>
  );
}
