export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  link: string;
  featured?: boolean;
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  product: string;
  content: string;
  rating: number;
}

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}
