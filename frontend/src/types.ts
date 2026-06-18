export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  link: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  product: string;
  content: string;
  rating: number;
}
