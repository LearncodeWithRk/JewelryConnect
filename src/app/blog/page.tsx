import { blogPosts } from '@/lib/data';
import { BlogCard } from '@/components/blog-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | JewelryConnect',
  description: 'Read our latest articles on jewelry styling, care tips, industry trends, and the stories behind the sparkle. Stay informed with JewelryConnect.',
};

export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-6xl font-bold">The Jewelry Journal</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Tips, trends, and stories from the world of jewelry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
