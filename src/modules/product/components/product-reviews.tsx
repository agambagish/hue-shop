"use client";

import { useState } from "react";

import { Filter, Star, ThumbsUp } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import { cn } from "@/lib/utils";

interface ProductReviewsProps {
  productId: string;
  rating: number;
  reviewCount: number;
}

const mockReviews = [
  {
    id: "1",
    author: "Sarah M.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-15",
    title: "Absolutely gorgeous!",
    content:
      "The quality of this silk blouse exceeded my expectations. The fabric is luxurious and the fit is perfect. I've received so many compliments!",
    helpful: 12,
    verified: true,
    size: "M",
    color: "Ivory",
  },
  {
    id: "2",
    author: "Emma L.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2024-01-10",
    title: "Beautiful but runs small",
    content:
      "Love the design and quality, but I had to exchange for a larger size. The silk is beautiful and drapes nicely.",
    helpful: 8,
    verified: true,
    size: "L",
    color: "Blush",
  },
  {
    id: "3",
    author: "Jessica R.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-05",
    title: "Perfect for work and evening",
    content:
      "This blouse is so versatile! I can wear it to the office during the day and it transitions perfectly for dinner out. The quality is exceptional.",
    helpful: 15,
    verified: true,
    size: "S",
    color: "Navy",
  },
];

const ratingDistribution = [
  { stars: 5, count: 89, percentage: 70 },
  { stars: 4, count: 25, percentage: 20 },
  { stars: 3, count: 8, percentage: 6 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 2, percentage: 2 },
];

export function ProductReviews({
  productId,
  rating,
  reviewCount,
}: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Customer Reviews</h2>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Sort by: Newest
        </Button>
      </div>
      <div className="grid gap-8 rounded-2xl bg-muted/30 p-6 md:grid-cols-2">
        <div className="space-y-4 text-center">
          <div className="font-bold text-4xl">{rating}</div>
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i.toString()}
                className={cn(
                  "h-5 w-5",
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground",
                )}
              />
            ))}
          </div>
          <div className="text-muted-foreground text-sm">
            Based on {reviewCount} reviews
          </div>
        </div>
        <div className="space-y-3">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center space-x-3">
              <div className="flex w-12 items-center space-x-1">
                <span className="text-sm">{item.stars}</span>
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              </div>
              <Progress value={item.percentage} className="flex-1" />
              <span className="w-8 text-muted-foreground text-sm">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0">
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.author}
                />
                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{review.author}</span>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i.toString()}
                        className={cn(
                          "h-4 w-4",
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground",
                        )}
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground text-xs">
                    <span>Size: {review.size}</span>
                    <span>•</span>
                    <span>Color: {review.color}</span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">{review.title}</h4>
                  <p className="text-muted-foreground">{review.content}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-xs">
                    <ThumbsUp className="mr-1 h-3 w-3" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline">Load More Reviews</Button>
      </div>
    </div>
  );
}
