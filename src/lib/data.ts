export type Testimonial = {
  id: number;
  name: string;
  title: string;
  quote: string;
  avatarId: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jessica L.',
    title: 'Happy Client',
    quote: 'The custom ring is beyond my wildest dreams! The attention to detail is just exquisite. I can\'t stop looking at it.',
    avatarId: 'avatar-1',
  },
  {
    id: 2,
    name: 'Marcus T.',
    title: 'Styling Customer',
    quote: 'I finally understand how to layer necklaces thanks to the styling session. It has completely transformed my look!',
    avatarId: 'avatar-2',
  },
  {
    id: 3,
    name: 'Samantha P.',
    title: 'Jewelry Enthusiast',
    quote: 'The advice on jewelry care was so practical. My silver pieces have never looked better. Highly recommended!',
    avatarId: 'avatar-3',
  },
];

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageId: string;
  collection: 'necklaces' | 'earrings' | 'rings' | 'bracelets';
};

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Ethereal Golden Necklace',
    description: 'A delicate 18k gold plated necklace with a stunning central pendant. Perfect for layering.',
    price: 185.0,
    imageId: 'product-1',
    collection: 'necklaces',
  },
  {
    id: 'prod-2',
    name: 'Celestial Silver Earrings',
    description: 'Stunning drop earrings crafted from sterling silver, embedded with sparkling cubic zirconia.',
    price: 120.0,
    imageId: 'product-2',
    collection: 'earrings',
  },
  {
    id: 'prod-3',
    name: 'Opulent Pearl Bracelet',
    description: 'An elegant bracelet featuring freshwater pearls on a durable silk thread, with a silver clasp.',
    price: 250.0,
    imageId: 'product-3',
    collection: 'bracelets',
  },
  {
    id: 'prod-4',
    name: 'Aurora Sapphire Ring',
    description: 'A breathtaking rose gold ring centered with a lab-grown sapphire, surrounded by a halo of diamonds.',
    price: 450.0,
    imageId: 'product-4',
    collection: 'rings',
  },
  {
    id: 'prod-5',
    name: 'Minimalist Silver Choker',
    description: 'Sleek and modern, this sterling silver choker adds a touch of understated elegance to any outfit.',
    price: 95.0,
    imageId: 'product-5',
    collection: 'necklaces',
  },
  {
    id: 'prod-6',
    name: 'Heirloom Vintage Brooch',
    description: 'A one-of-a-kind vintage-inspired brooch, perfect for adding a touch of classic glamour.',
    price: 155.0,
    imageId: 'product-6',
    collection: 'bracelets',
  },
  {
    id: 'prod-7',
    name: 'Boho Beaded Anklet',
    description: 'A vibrant, handcrafted beaded anklet that captures the free spirit of bohemian style.',
    price: 45.0,
    imageId: 'product-7',
    collection: 'bracelets',
  },
  {
    id: 'prod-8',
    name: 'Personalized Gold Locket',
    description: 'A timeless golden locket that opens to hold two small photos. Custom engraving available.',
    price: 220.0,
    imageId: 'product-8',
    collection: 'necklaces',
  },
];

export type Blog = {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    imageId: string;
}

export const blogPosts: Blog[] = [
    {
        id: 1,
        slug: 'how-to-style-jewelry',
        title: 'How to Style Jewelry for Every Occasion',
        excerpt: 'From boardroom meetings to weekend brunches, learn the art of selecting the perfect jewelry to complement your outfit and occasion.',
        content: '<p>Styling jewelry is an art form. For a professional setting, opt for understated pieces like a simple pendant necklace, stud earrings, or a classic watch. This conveys elegance without being distracting. </p><p>For a casual day out, feel free to experiment! Layered necklaces, stackable rings, and colorful bracelets can add a fun, personal touch to your look. When it comes to evening events, it\'s time to bring out the statement pieces. A bold chandelier earring or a dazzling bib necklace can be the star of your ensemble. Remember, the key is balance; if you wear a statement necklace, keep your earrings simple, and vice versa.</p>',
        author: 'JewelryConnect',
        date: 'October 26, 2023',
        imageId: 'blog-1-banner',
    },
    {
        id: 2,
        slug: 'guide-to-sustainable-jewelry',
        title: 'A Conscious Choice: Your Guide to Sustainable Jewelry',
        excerpt: 'Discover the world of sustainable and ethical jewelry. Learn what to look for, from recycled metals to conflict-free gemstones.',
        content: '<p>In today\'s world, making conscious purchasing decisions is more important than ever. The jewelry industry is no exception. Sustainable jewelry focuses on ethical sourcing and environmentally friendly practices. Look for brands that use recycled precious metals like gold and silver, which reduces the need for new mining. </p><p>When it comes to gemstones, seek out lab-grown diamonds or stones that are certified conflict-free. Many jewelers are now transparent about their supply chains, providing traceability from mine to market. By choosing sustainable jewelry, you\'re not only acquiring a beautiful piece but also supporting a healthier planet and fairer labor practices.</p>',
        author: 'JewelryConnect',
        date: 'November 15, 2023',
        imageId: 'blog-2-banner',
    },
    {
        id: 3,
        slug: 'caring-for-your-jewelry',
        title: 'The Ultimate Guide to Caring for Your Precious Jewelry',
        excerpt: 'Keep your treasures sparkling for a lifetime. Our expert tips cover everything from cleaning and storage to routine maintenance.',
        content: '<p>Proper care is essential to maintain the beauty and longevity of your jewelry. Always remove your jewelry before swimming, showering, or cleaning, as chemicals can damage precious metals and stones. Store each piece separately in a soft pouch or a lined jewelry box to prevent scratching. </p><p>To clean your jewelry at home, use a soft-bristled brush and a solution of warm water and mild dish soap. Gently scrub the piece and rinse thoroughly. For a deeper clean, especially for intricate pieces, consider professional cleaning once a year. Regular care will ensure your jewelry remains a cherished part of your collection for years to come.</p>',
        author: 'JewelryConnect',
        date: 'December 5, 2023',
        imageId: 'blog-3-banner',
    },
    {
        id: 4,
        slug: 'history-of-engagement-rings',
        title: 'A Symbol of Love: The Fascinating History of Engagement Rings',
        excerpt: 'Journey through time and explore how the tradition of giving engagement rings began and evolved into the symbol of love we know today.',
        content: '<p>The tradition of engagement rings dates back to ancient Rome, where women wore rings made of ivory, flint, bone, copper, or iron to signify a business contract or to affirm mutual love and obedience. The first well-documented use of a diamond ring to signify engagement was in 1477, by Archduke Maximilian of Austria for his betrothed, Mary of Burgundy. </p><p>However, it wasn\'t until the 19th century that diamond rings became popular among the wider public, thanks to increased diamond supply from Africa. The famous "A Diamond is Forever" campaign by De Beers in the mid-20th century cemented the diamond ring as the ultimate symbol of commitment. Today, while diamonds remain popular, many couples are opting for unique gemstones and custom designs that reflect their personal stories.</p>',
        author: 'JewelryConnect',
        date: 'January 12, 2024',
        imageId: 'blog-4-banner',
    }
];
