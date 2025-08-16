import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const categories = [
  {
    name: 'Category A – Political Leaders and Activists',
    description: 'Showcasing distinguished personalities who fought battles to liberate Black people from the shackles of slavery and colonialism.',
    items: ['Freedom Fighters', 'Pan African Leaders', 'Civil Rights Leaders', 'Royal Warriors'],
    imageUrl: 'https://i.ibb.co/JW7whnHr/Black-Royal-Heroes-2.jpg',
    imageHint: 'political leader speech'
  },
  {
    name: 'Category B – Cultural Icons and Innovators',
    description: 'Showcasing distinguished personalities who made history and promoted Black image in global events and development.',
    items: ['Black Leaders', 'Great Icons', 'Political Leaders', 'International Figures'],
    imageUrl: 'https://i.ibb.co/FkVdRGqh/Black-Royal-Heroes-3.jpg',
    imageHint: 'cultural icon artist'
  },
  {
    name: 'Category C – Community Champions',
    description: 'Showcasing distinguished personalities making history in international events, sports, entertainment, humanity, and development.',
    items: ['Great Superstars', 'Legends', 'Trailblazers', 'Change Makers', 'Black Achievers'],
    imageUrl: 'https://i.ibb.co/v4NDpcgk/Black-Royal-Heroes-4.jpg',
    imageHint: 'community champion award'
  },
]

export default function Categories() {
  return (
    <section className="my-16 py-12 bg-secondary/20 rounded-lg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-wide">
            Categories of Honorees
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Three distinguished categories recognizing different aspects of Black excellence and achievement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <Card key={category.name} className="flex flex-col overflow-hidden">
                <div className="relative h-48 w-full">
                    <Image 
                        src={category.imageUrl}
                        alt={category.name}
                        fill
                        className="object-cover"
                        data-ai-hint={category.imageHint}
                    />
                </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {category.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
