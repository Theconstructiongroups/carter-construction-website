/**
 * Verified business information for Carter Construction Group.
 * Sourced from the company's public Google Business Profile.
 */
export const business = {
  name: 'Carter Construction Group',
  category: 'Residential General Contractor',
  phone: '(856) 879-8610',
  phoneHref: 'tel:+18568798610',
  address: '1125 Hidden Glen, Deptford, NJ 08096',
  hours: 'Mon–Sat · Opens 8:30 AM',
  rating: '5.0',
  mapsUrl:
    'https://www.google.com/maps/place/Carter+Construction+Group/@39.823697,-75.1327866,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6d19bd73960af:0xbb0144f3798edaf3!8m2!3d39.823697!4d-75.1327866!16s%2Fg%2F11x8yfr07t',
  reviewsUrl:
    'https://www.google.com/maps/place/Carter+Construction+Group/@39.823697,-75.1327866,17z/data=!4m7!3m6!1s0x89c6d19bd73960af:0xbb0144f3798edaf3!8m2!3d39.823697!4d-75.1327866!10e1!16s%2Fg%2F11x8yfr07t',
  embedUrl:
    'https://www.google.com/maps?q=1125+Hidden+Glen,+Deptford,+NJ+08096&output=embed',
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

/** Services offered, per the client brief. */
export const services: Service[] = [
  { title: 'Kitchen Remodeling', description: 'Custom kitchen transformations with premium cabinetry, countertops, and finishes built for everyday living.', icon: 'kitchen' },
  { title: 'Bathroom Remodeling', description: 'Spa-inspired bathrooms featuring elegant tile, modern fixtures, and thoughtful, functional layouts.', icon: 'bath' },
  { title: 'Basement Remodeling', description: 'Turn unused space into a finished living area — family rooms, home offices, or entertainment spaces.', icon: 'basement' },
  { title: 'Deck Construction', description: 'Durable, beautiful outdoor decks designed to extend your living space and elevate your backyard.', icon: 'deck' },
  { title: 'Home Additions', description: 'Seamless additions that expand your home while matching its existing character and structure.', icon: 'addition' },
  { title: 'Flooring', description: 'Expert installation of hardwood, laminate, and luxury vinyl for a flawless, lasting finish.', icon: 'floor' },
  { title: 'Tile Installation', description: 'Precision tile work for kitchens, bathrooms, and living spaces with clean, professional detail.', icon: 'tile' },
  { title: 'Tile Replacement', description: 'Refresh worn or dated tile with modern materials and meticulous craftsmanship.', icon: 'tile' },
  { title: 'Exterior Finishing', description: 'Polished exterior finishes that boost curb appeal and protect your investment.', icon: 'exterior' },
  { title: 'General Construction', description: 'Reliable general contracting for projects of every size, managed start to finish.', icon: 'construction' },
  { title: 'Home Construction', description: 'Full-scale residential construction built on quality craftsmanship and clear communication.', icon: 'home' },
];

export type Project = {
  title: string;
  category: string;
  image: string;
  span?: boolean;
};

export type Value = {
  title: string;
  description: string;
  icon: string;
};

/** Value propositions reasonably supported by the company's public reputation. */
export const values: Value[] = [
  { title: 'Quality Craftsmanship', description: 'Every project is built to last, with careful attention to materials and finish.', icon: 'quality' },
  { title: 'Attention to Detail', description: 'The small details are what set a great remodel apart — and we never overlook them.', icon: 'detail' },
  { title: 'Honest Communication', description: 'Clear, straightforward conversations from the first estimate to the final walkthrough.', icon: 'chat' },
  { title: 'Professional Service', description: 'A respectful, professional crew that treats your home like their own.', icon: 'shield' },
  { title: 'Reliable Scheduling', description: 'Projects kept on track with dependable timelines you can plan around.', icon: 'clock' },
  { title: 'Customer Satisfaction', description: 'A 5.0-star reputation built on happy homeowners across South Jersey.', icon: 'star' },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const process: Step[] = [
  { number: '01', title: 'Consultation', description: 'We meet to understand your vision, needs, and budget — and provide a free estimate.' },
  { number: '02', title: 'Planning', description: 'We develop a detailed plan, timeline, and material selections tailored to your home.' },
  { number: '03', title: 'Construction', description: 'Our skilled team brings the plan to life with quality craftsmanship and clean job sites.' },
  { number: '04', title: 'Final Walkthrough', description: 'We review every detail together to ensure the finished result exceeds expectations.' },
];

export type Review = {
  name: string;
  badge?: string;
  text: string;
  partial?: boolean;
};

/** Real Google reviews, used exactly as provided — no fabricated text. */
export const reviews: Review[] = [
  {
    name: 'David Hughes',
    badge: 'Reasonable price',
    text: '“From Outdated to Oasis: A Five-Star Transformation. Having lived with my old, tired bathroom for years, I finally decided it was…”',
    partial: true,
  },
  {
    name: 'Renee Gramaglia',
    badge: 'Local Guide',
    text: '“Carter Construction is top notch! Tom redid my entire house top to bottom—it sold in a week! Looking back I wish I still lived there it was so beautiful! So when I moved into my new home and needed some renovations there was no one else I…”',
    partial: true,
  },
  {
    name: 'Sandi Ryan',
    text: '“Top construction—each and every time!…”',
    partial: true,
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  { question: 'Do you offer free estimates?', answer: 'Yes. We provide free, no-obligation estimates for your project. Give us a call or send a message through the contact form to get started.' },
  { question: 'What remodeling services do you provide?', answer: 'We specialize in kitchen, bathroom, and basement remodeling, deck construction, home additions, flooring, tile installation and replacement, exterior finishing, and general residential construction.' },
  { question: 'What areas do you serve?', answer: 'We are based in Deptford, New Jersey and serve homeowners throughout Deptford and the surrounding South Jersey area.' },
  { question: 'How do I get started?', answer: 'The easiest way to begin is to reach out for a free consultation. We will discuss your vision, answer your questions, and provide an estimate for your project.' },
  { question: 'How can I request a quote?', answer: 'You can call us directly at (856) 879-8610 or fill out the contact form on this page, and we will get back to you promptly.' },
];
