"use client";

import { useState } from "react";

import {
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  Shield,
  Star,
  Truck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  shop: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: { name: string; value: string }[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  sku: string;
}

interface Props {
  product: Product;
}

export function ProductDetails({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Badge
          variant="secondary"
          className="rounded-full px-4 py-2 font-medium text-sm"
        >
          {product.shop}
        </Badge>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              className={cn(
                "h-4 w-4",
                isWishlisted && "fill-red-500 text-red-500",
              )}
            />
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i.toString()}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground",
                )}
              />
            ))}
            <span className="ml-2 font-medium text-sm">{product.rating}</span>
          </div>
          <span className="text-muted-foreground text-sm">
            ({product.reviewCount} reviews)
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-3xl">${product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-muted-foreground text-xl line-through">
                ${product.originalPrice}
              </span>
              <Badge variant="destructive" className="text-sm">
                {discountPercentage}% OFF
              </Badge>
            </>
          )}
        </div>
        <p className="text-muted-foreground text-sm">
          SKU: {product.sku} • {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
      <Separator />
      <div className="space-y-3">
        <h3 className="font-semibold">Color: {selectedColor.name}</h3>
        <div className="flex space-x-2">
          {product.colors.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={cn(
                "h-10 w-10 rounded-full border-2 transition-all duration-200",
                selectedColor.name === color.name
                  ? "border-primary ring-2 ring-primary ring-offset-2"
                  : "border-muted-foreground/20 hover:border-muted-foreground/40",
              )}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Size</h3>
          <Button variant="link" className="h-auto p-0 text-sm">
            Size Guide
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={cn(
                "rounded-lg border px-4 py-3 font-medium text-sm transition-all duration-200",
                selectedSize === size
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground/20 hover:border-muted-foreground/40",
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center rounded-lg border">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-4 py-2 font-medium">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            size="lg"
            className="flex-1"
            disabled={!selectedSize || !product.inStock}
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </Button>
        </div>
        <Button variant="outline" size="lg" className="w-full bg-transparent">
          Buy Now
        </Button>
      </div>
      <Separator />
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="space-y-2">
          <Truck className="mx-auto h-6 w-6 text-primary" />
          <div className="font-medium text-sm">Free Shipping</div>
          <div className="text-muted-foreground text-xs">
            On orders over $100
          </div>
        </div>
        <div className="space-y-2">
          <RotateCcw className="mx-auto h-6 w-6 text-primary" />
          <div className="font-medium text-sm">Easy Returns</div>
          <div className="text-muted-foreground text-xs">
            30-day return policy
          </div>
        </div>
        <div className="space-y-2">
          <Shield className="mx-auto h-6 w-6 text-primary" />
          <div className="font-medium text-sm">Secure Payment</div>
          <div className="text-muted-foreground text-xs">SSL encrypted</div>
        </div>
      </div>
      <Separator />
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Description</h3>
        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li
              key={index.toString()}
              className="flex items-center space-x-2 text-sm"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
