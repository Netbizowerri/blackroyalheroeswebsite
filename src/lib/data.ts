export type HistoricalFigure = {
  id: number;
  name: string;
  imageUrl: string;
  imageHint: string;
  biography: string;
  roles: string[];
};

export const historicalFigures: HistoricalFigure[] = [
  {
    id: 1,
    name: 'Martin Luther King Jr.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'portrait man',
    biography: 'Martin Luther King Jr. was an American Baptist minister and activist who became the most visible spokesman and leader in the Civil Rights Movement from 1955 until his assassination in 1968. Born in Atlanta, King is best known for advancing civil rights through nonviolence and civil disobedience, inspired by his Christian beliefs and the nonviolent activism of Mahatma Gandhi. He led the 1955 Montgomery bus boycott and later became the first president of the Southern Christian Leadership Conference (SCLC). As president of the SCLC, he led the unsuccessful Albany Movement in Albany, Georgia, and helped organize some of the nonviolent 1963 protests in Birmingham, Alabama. King also helped organize the 1963 March on Washington, where he delivered his famous "I Have a Dream" speech.',
    roles: ['Activist', 'Minister'],
  },
  {
    id: 2,
    name: 'Rosa Parks',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'portrait woman',
    biography: 'Rosa Louise McCauley Parks was an American activist in the civil rights movement best known for her pivotal role in the Montgomery bus boycott. The United States Congress has called her "the first lady of civil rights" and "the mother of the freedom movement". On December 1, 1955, in Montgomery, Alabama, Parks rejected bus driver James F. Blake\'s order to vacate a row of four seats in the "colored" section in favor of a white passenger, once the "white" section was filled. Parks\' act of defiance and the Montgomery bus boycott became important symbols of the movement. She became an international icon of resistance to racial segregation.',
    roles: ['Activist'],
  },
  {
    id: 3,
    name: 'Mae C. Jemison',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'astronaut woman',
    biography: 'Mae Carol Jemison is an American engineer, physician, and former NASA astronaut. She became the first African-American woman to travel into space when she served as a mission specialist aboard the Space Shuttle Endeavour. Jemison joined NASA\'s astronaut corps in 1987 and was selected to serve for the STS-47 mission, during which she orbited the Earth for nearly eight days on September 12–20, 1992. After leaving NASA in 1993, Jemison founded a technology research company and later formed a non-profit educational foundation. She has also been a professor at Cornell University and was a professor-at-large at Dartmouth College.',
    roles: ['Astronaut', 'Engineer', 'Physician'],
  },
  {
    id: 4,
    name: 'George Washington Carver',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'scientist man',
    biography: 'George Washington Carver was an American agricultural scientist and inventor who promoted alternative crops to cotton and methods to prevent soil depletion. He was the most prominent black scientist of the early 20th century. While a professor at Tuskegee Institute, Carver developed techniques to improve soils depleted by repeated plantings of cotton. He wanted poor farmers to grow alternative crops, such as peanuts and sweet potatoes, as a source of their own food and to improve their quality of life. He is well known for his work with peanuts, from which he created over 300 products, including plastics, dyes, and gasoline.',
    roles: ['Scientist', 'Inventor'],
  },
  {
    id: 5,
    name: 'Harriet Tubman',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'historical woman',
    biography: 'Harriet Tubman was an American abolitionist and political activist. Born into slavery, Tubman escaped and subsequently made some thirteen missions to rescue approximately seventy enslaved people, family and friends, using the network of antislavery activists and safe houses known as the Underground Railroad. During the American Civil War, she served as an armed scout and spy for the Union Army. In her later years, Tubman was an activist in the movement for women\'s suffrage. She was a courageous and determined figure who risked her own freedom and life to help others.',
    roles: ['Abolitionist', 'Activist'],
  },
  {
    id: 6,
    name: 'Thurgood Marshall',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'judge man',
    biography: 'Thurgood Marshall was an American lawyer and civil rights activist who served as Associate Justice of the Supreme Court of the United States from October 1967 until October 1991. Marshall was the Court\'s first African-American justice. Prior to his judicial service, he successfully argued several cases before the Supreme Court, including Brown v. Board of Education. As a judge, he consistently supported individual rights and civil liberties, leaving a lasting legacy on American jurisprudence. His work was instrumental in ending legal segregation in the United States.',
    roles: ['Justice', 'Lawyer'],
  },
];
