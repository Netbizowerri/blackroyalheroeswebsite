import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award, Gem, History, Users } from "lucide-react";

const sections = [
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: 'The Ultimate Black Royal Event',
    content: 'To honour distinguished men and women who made history and promoted humanity and development in the last 20 decades.'
  },
  {
    icon: <History className="w-10 h-10 text-primary" />,
    title: 'Royal Heritage',
    content: 'Celebrating heroic events and remarkable achievements in Black history.'
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "A Festival of Who's Who in Black History",
    content: 'Showcasing distinguished personalities who made tremendous sacrifices and amazing contributions to redeem Black image in different parts of the world.'
  },
  {
    icon: <Gem className="w-10 h-10 text-primary" />,
    title: 'A Great & Exciting Event',
    content: 'Featuring the most colourful and sensational parade of dignitaries with the cream of Black icons, great legends, superstars, and esteemed personalities.'
  },
]

export default function InfoSections() {
  return (
    <section className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map(section => (
          <Card key={section.title} className="text-center bg-secondary/30 border-secondary hover:border-primary transition-colors">
            <CardHeader className="items-center">
              <div className="p-4 bg-secondary rounded-full mb-4">
                {section.icon}
              </div>
              <CardTitle className="font-headline text-xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{section.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
