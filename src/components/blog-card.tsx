import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Blog } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: Blog;
}

export function BlogCard({ post }: BlogCardProps) {
  const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);

  return (
    <Link href={`/blog/${post.slug}`} className="group">
        <Card className="overflow-hidden h-full flex flex-col border-stone-200/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
        {postImage && (
            <div className="aspect-video overflow-hidden relative">
            <Image
                src={postImage.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={postImage.imageHint}
            />
            </div>
        )}
        <CardHeader className="flex-grow">
            <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
            {post.title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter>
            <div className="text-primary font-semibold flex items-center">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </CardFooter>
        </Card>
    </Link>
  );
}
