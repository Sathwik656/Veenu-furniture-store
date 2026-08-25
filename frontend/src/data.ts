import { NewsPost, Product, Testimonial } from './types';

export const SITE = {
  name: 'Veenu Furnitures',
  phoneDisplay: '+91 77955 05525',
  phoneHref: 'tel:+917795505525',
  whatsapp: (message?: string) =>
    `https://wa.me/917795505525${message ? `?text=${encodeURIComponent(message)}` : ''}`,
  email: 'veenufurnituredm@gmail.com',
  addressLines: ['Veenu Furniture & Ladder', 'Kulur, Mangaluru,', 'Karnataka'],
  instagram: {
    url: 'https://www.instagram.com/veenu_furniture/',
    handle: '@veenu_furnitures',
    bio: 'Premium furniture & ladders from Mangalore. Trusted since 1984.',
  },
  facebook: { url: 'https://www.facebook.com/Veenufurniture', handle: 'Veenu Furniture' },
  mapsEmbed:
    'https://maps.google.com/maps?q=Veenu%20Furniture%20%26%20Ladder%20-%20Kulur&t=&z=17&ie=UTF8&iwloc=&output=embed',
  mapsLink:
    'https://www.google.com/maps/place/Veenu+Furniture+%26+Ladder+-+Kulur/@12.9191187,74.8273732,17.25z/data=!4m6!3m5!1s0x3ba35104ea7795fd:0x3851df8070d73fdc!8m2!3d12.9190687!4d74.8320799!16s%2Fg%2F11f61q2kfc',
  reviewLink: 'https://share.google/yZRbNXZcNiZ0lE47k',
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Easy Chair with Wooden Handle',
    category: 'Outdoor',
    price: 3699,
    description:
      'Our classic easy chair with a smooth wooden handle and extra-wide fabric seat. Foldable, lightweight and rust-proof — built for relaxed everyday lounging at home or on the balcony.',
    imageUrl: '/images/easy_0.webp',
    link: 'https://www.flipkart.com/veenu-easy-chair-extra-wide-foldable-light-weight-rust-proof-3-years-warranty-fabric-outdoor/p/itm0aec9b79eadfc',
    featured: true,
    features: ['Extra-wide fabric seat', 'Smooth wooden armrest handle', 'Foldable & lightweight', 'Rust-proof frame', '3-year warranty'],
  },
  {
    id: '2',
    name: 'Easy Chair Set of 2',
    category: 'Outdoor',
    price: 6199,
    description:
      'A pair of foldable easy chairs with a sturdy black frame and multi-coloured fabric seats. Perfect for sharing your balcony, garden or living room with someone special.',
    imageUrl: '/images/easy_3.webp',
    link: 'https://www.flipkart.com/veenu-easy-chair-set-2-foldable-black-framed-multi-colored-seat-3-years-warranty-metal-outdoor/p/itm3df51b30be29f',
    featured: true,
    features: ['Set of two chairs', 'Sturdy black metal frame', 'Multi-coloured fabric seats', 'Foldable for easy storage', '3-year warranty'],
  },
  {
    id: '3',
    name: 'Kids Easy Chair',
    category: 'Outdoor',
    price: 2099,
    description:
      'A just-their-size easy chair with a soft cloth seat on a strong foldable metal frame. Light enough for kids to move around, tough enough for daily use.',
    imageUrl: '/images/easy_5.webp',
    link: 'https://www.flipkart.com/veenu-easy-cloth-chair-kids-foldable-metal-chair-portable-folding-outdoor/p/itm5103254cbbb5f',
    featured: true,
    features: ['Soft cloth seat', 'Sized for kids', 'Foldable metal frame', 'Portable & lightweight', '3-year warranty'],
  },
  {
    id: '4',
    name: '7 Step Ladder',
    category: 'Ladders',
    price: 3999,
    description:
      'A heavy-duty 7-step steel ladder with a powder-coated finish, anti-slip grips and a stable, ISO-certified build. Reaches high shelves and lofts with total confidence.',
    imageUrl: '/images/7step.webp',
    link: 'https://www.flipkart.com/veenu-7-steps-ladder-iso-certified-stable-durable-foldable-heavy-duty-powder-coated-made-india-3-years-warranty-steel-ladder/p/itm34d7fc576ed68',
    featured: true,
    features: ['ISO certified', 'Heavy-duty powder-coated steel', 'Anti-slip grip steps', 'Folds flat for storage', 'Made in India', '3-year warranty'],
  },
  {
    id: '5',
    name: '6 Step Ladder',
    category: 'Ladders',
    price: 3499,
    description:
      'Six stable steps of powder-coated steel in a foldable, durable frame. ISO certified and made in India — the dependable middle height for most homes.',
    imageUrl: '/images/6step.webp',
    link: 'https://www.flipkart.com/veenu-6-steps-ladder-iso-certified-stable-durable-foldable-heavy-duty-powder-coated-made-india-3-years-warranty-steel-ladder/p/itm1b6828831eb69',
    features: ['ISO certified', 'Powder-coated steel frame', 'Anti-slip grips', 'Foldable design', 'Made in India', '3-year warranty'],
  },
  {
    id: '6',
    name: '5 Step Ladder Aluminium',
    category: 'Ladders',
    price: 4499,
    description:
      'A premium 5-step aluminium ladder that is genuinely light to carry yet loaded with safety technology. ISO certified, foldable and effortless to move around the house.',
    imageUrl: '/images/5step.webp',
    link: 'https://www.flipkart.com/veenu-premium-aluminium-5-steps-iso-certified-foldable-light-weight-loaded-safety-technology-3-years-warranty-ladder/p/itmfe976f139e777',
    featured: true,
    features: ['Premium lightweight aluminium', 'Loaded with safety technology', 'ISO certified', 'Foldable & portable', '3-year warranty'],
  },
  {
    id: '7',
    name: 'Easy Chair',
    category: 'Outdoor',
    price: 3599,
    description:
      'The timeless Veenu easy chair — extra-wide seat, foldable metal frame and a rust-proof finish. Four adjustable positions let you sit up or lean all the way back.',
    imageUrl: '/images/easy_1.webp',
    link: 'https://www.flipkart.com/veenu-easy-chair-extra-wide-foldable-light-weight-rust-proof-3-years-warranty-metal-outdoor/p/itme120d5505a804',
    featured: true,
    features: ['Extra-wide seat', 'Adjustable positions', 'Rust-proof metal frame', 'Foldable & lightweight', '3-year warranty'],
  },
  {
    id: '8',
    name: "Couples Easy Chair",
    category: 'Outdoor',
    price: 4099,
    description:
      'A two-seat easy chair with an extra-wide frame — one generous seat built for two. Foldable, rust-proof and made for slow evenings together.',
    imageUrl: '/images/easy_4.webp',
    link: 'https://www.flipkart.com/veenu-couple-s-easy-chair-2-seats-1-chair-extra-wide-foldable-3-years-warranty-metal-outdoor/p/itm806f91b68b277',
    featured: true,
    features: ['Two-seat design', 'Extra-wide frame', 'Foldable', 'Rust-proof finish', '3-year warranty'],
  },
  {
    id: '9',
    name: 'Easy Chair Pink',
    category: 'Outdoor',
    price: 3650,
    description:
      'The classic Veenu easy chair in a fresh pink fabric seat. Same extra-wide comfort, foldable frame and rust-proof build — with a brighter personality.',
    imageUrl: '/images/easy_2.webp',
    link: 'https://www.flipkart.com/veenu-easy-chair-extra-wide-foldable-light-weight-rust-proof-3-years-warranty-metal-outdoor/p/itmcad8f3f2a8d28',
    features: ['Extra-wide pink fabric seat', 'Foldable & lightweight', 'Rust-proof metal frame', '3-year warranty'],
  },
  {
    id: '10',
    name: 'Ironing Board',
    category: 'Ironing Board',
    price: 1999,
    description:
      'Veenu Extra Large Ironing Board with attached iron holder. Foldable, lightweight and easy to carry, with 4 adjustable height levels, rubberised feet and a durable design. Comes with a 3-year warranty.',
    imageUrl: '/images/ironing_stand.webp',
    link: 'https://www.flipkart.com/veenu-ironing-stand-extra-wide-attached-iron-holder-durable-3-years-warranty-board/p/itmfe7u3hvzzcyzw',
    features: [
      'Extra-large ironing surface',
      '4 levels of adjustable height',
      'Foldable, lightweight & easy to carry',
      'Attached iron holder with rubberised feet',
      'Stable & durable design',
      '3-year warranty',
      'Made in India',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ganesh Kumar R',
    product: 'Easy chair',
    content:
      'Material is good. And it has 4 adjustable positions. Brought for my mom and she is happy and very comfortable Hand rest position is proper.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Hari Prasad',
    product: '7 Step ladder',
    content:
      'The ladder is Very strong and beautifully painted and has some nice grips and the quality is amazing Must needed product in every house Thanks veenu Team for a wonderful prduct supply.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Manjunatha',
    product: 'Ironing Stand',
    content:
      'Very good quality ironing board delivered at a reasonable price, Strong and sturdy good width for comfortable ironing.',
    rating: 5,
  },
];

export const stats = [
  { value: 1984, suffix: '', label: 'Established' },
  { value: 42, suffix: '+', label: 'Years of Excellence' },
  { value: 3, suffix: '-Year', label: 'Product Warranty' },
  { value: 100, suffix: '%', label: 'Made in India' },
];

export const newsPosts: NewsPost[] = [
  {
    slug: 'four-decades-of-veenu',
    title: 'Four Decades of Veenu: Our Story Since 1984',
    excerpt:
      'From a small furniture shop in Kulur to home of South India\u2019s longest furniture showroom — four decades of quality, service and Made-in-India craftsmanship.',
    date: '2026-07-18',
    category: 'Company',
    image: '/images/about.webp',
    imageAlt: 'Inside the Veenu Furnitures showroom in Kulur, Mangaluru',
    paragraphs: [
      'In 1984, we opened the doors of a small furniture shop in Kulur, Mangaluru, with a simple promise: honest furniture at honest prices. More than forty years later, that promise has not changed — only the number of homes we have furnished has.',
      'Today, Veenu Furnitures is proud to be the home of South India\u2019s longest furniture showroom. Walking through it, you will find everything from our signature easy chairs to sturdy household ladders — every piece chosen or built to survive real, everyday family life.',
      'We have always believed in proudly Made-in-India furniture. Supporting local manufacturing means better quality control, fairer prices and products designed for Indian homes rather than adapted to them.',
      'To every family that has bought an easy chair for their parents, a ladder for their new home or a kids chair for their little ones — thank you for four remarkable decades. We look forward to furnishing many more.',
    ],
  },
  {
    slug: 'how-to-choose-a-home-ladder',
    title: 'How to Choose the Right Ladder for Your Home',
    excerpt:
      'Steel or aluminium? Five steps or seven? A practical buyer\u2019s guide to picking a ladder that is safe, certified and right for your home.',
    date: '2026-04-02',
    category: 'Buying Guide',
    image: '/images/7step.webp',
    imageAlt: 'Veenu 7-step powder-coated steel ladder',
    paragraphs: [
      'A ladder is one of those purchases most households make only once or twice a decade — so it pays to choose well. Here is what we tell every customer who walks into our Kulur showroom looking for one.',
      'First, pick your height honestly. A 5-step ladder comfortably covers fans, wardrobes and light maintenance in standard apartments. If you have a loft, tall storage or a duplex, a 6 or 7-step model saves you from balancing acts. When in doubt, go one step higher — never stretch past the safe standing level.',
      'Second, choose your material. Powder-coated steel ladders are the heavy-duty workhorses: extremely stable and beautifully finished. Aluminium ladders cost a little more but are dramatically lighter — ideal if you move the ladder between rooms often or prefer an easier carry.',
      'Third, check the details that matter: an ISO-certified build, anti-slip grips on every step, a wide stable base and a hinge that folds flat for storage. Every ladder we stock carries these, along with a 3-year warranty, because a ladder is a safety product before it is a convenience.',
      'Still unsure? Visit our showroom and try them yourself — a ladder should feel planted under you before you take it home.',
    ],
  },
  {
    slug: 'easy-chair-care-guide',
    title: 'Caring for Your Easy Chair: Simple Habits That Make It Last',
    excerpt:
      'Rust-proof frames and tough fabric seats do most of the work — but these five easy habits will keep your Veenu easy chair looking and feeling new for years.',
    date: '2026-01-15',
    category: 'Care & Maintenance',
    image: '/images/easy_1.webp',
    imageAlt: 'The classic Veenu easy chair with extra-wide fabric seat',
    paragraphs: [
      'Every Veenu easy chair leaves our showroom with a rust-proof frame and an extra-wide fabric seat built for years of use. With five small habits, you can keep yours feeling brand new through all of them.',
      'Vacuum the fabric seat monthly with a brush attachment — dust that settles into weave slowly dulls colour and stiffens fibres. Spills should be blotted immediately with a dry cloth; avoid scrubbing, which pushes stains deeper.',
      'Fold and unfold the frame fully rather than halfway. The hinges on our chairs are tested for thousands of cycles, but gentle full-range use keeps the locking mechanism crisp for decades.',
      'If your chair lives on a balcony or terrace, occasionally wipe the metal frame with a dry cloth. Our frames are rust-proof, but keeping them clean preserves the finish and lets you spot any loose bolt early.',
      'Finally, use the adjustable positions as intended — lock the position fully before settling in. Do that, and your easy chair will still be the favourite seat in the house a decade from now. And if anything goes wrong, remember: every chair carries a 3-year warranty.',
    ],
  },
];
