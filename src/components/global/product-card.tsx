import Image from "next/image";
import Link from "next/link";

import { Heart, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  // biome-ignore lint/suspicious/noExplicitAny: _
  product: any;
}

export function ProductCard({ product }: Props) {
  return (
    <Card
      key={product.id}
      className="group overflow-hidden border-0 py-0 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <CardContent className="p-0">
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-primary text-primary-foreground">
                  New
                </Badge>
              )}
              {product.originalPrice && (
                <Badge variant="destructive">Sale</Badge>
              )}
            </div>
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <div className="absolute right-3 bottom-3 left-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Button className="w-full" size="sm">
                Quick Add
              </Button>
            </div>
          </div>
          <div className="space-y-2 p-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-muted-foreground text-xs">
                  {product.rating}
                </span>
              </div>
            </div>
            <h3 className="font-medium text-sm">{product.name}</h3>
            <div className="flex items-center space-x-2">
              <span className="font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-muted-foreground text-sm line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
