"use client";

import { ChevronRight, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const reviewStats = [
  { stars: 5, count: 4000, percentage: 85 },
  { stars: 4, count: 2100, percentage: 45 },
  { stars: 3, count: 800, percentage: 17 },
  { stars: 2, count: 631, percentage: 13 },
  { stars: 1, count: 344, percentage: 7 },
];

const featuredReview = {
  rating: 5,
  title: "Exceeded my expectations!",
  content:
    "I was skeptical at first, but this product has completely changed my daily routine. The quality is outstanding and it's so easy to use.",
  author: "Sarah J.",
  verified: true,
  date: "March 12, 2025",
};

export function CustomerReviews() {
  const totalReviews = reviewStats.reduce((sum, stat) => sum + stat.count, 0);
  const averageRating = 4.5;

  return (
    <Card className="h-[500px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="font-semibold text-lg">
            Customer Reviews
          </CardTitle>
          <p className="mt-1 text-muted-foreground text-sm">
            Based on {totalReviews.toLocaleString()} verified purchases
          </p>
        </div>
        <Button variant="ghost" size="sm" className="gap-1">
          View All
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-8 p-6 md:grid-cols-2">
          <div className="space-y-4 text-center">
            <div className="font-bold text-4xl">{averageRating}</div>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i.toString()}
                  className={cn(
                    "h-5 w-5",
                    i < Math.floor(averageRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground",
                  )}
                />
              ))}
            </div>
            <div className="text-muted-foreground text-sm">
              Based on {totalReviews} reviews
            </div>
          </div>
          <div className="space-y-3">
            {reviewStats.map((item) => (
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
        <div className="space-y-3 border-t pt-4">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i.toString()}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">
              {featuredReview.date}
            </span>
          </div>
          <h4 className="font-semibold">{featuredReview.title}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {featuredReview.content}
          </p>
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{featuredReview.author}</span>
            {featuredReview.verified && (
              <Badge variant="secondary" className="text-xs">
                Verified Purchase
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
