import { notFound } from "next/navigation";

import { ProductDetails } from "@/modules/product/components/product-details";
import { ProductImageSlider } from "@/modules/product/components/product-image-slider";
import { ProductReviews } from "@/modules/product/components/product-reviews";
import { RelatedProducts } from "@/modules/product/components/related-products";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Mock product data - in a real app, this would come from an API
const products = {
  "1": {
    id: "1",
    name: "Premium Silk Blouse",
    price: 189,
    originalPrice: 249,
    shop: "Elegant Boutique",
    description:
      "Crafted from the finest mulberry silk, this luxurious blouse features a timeless design that effortlessly transitions from day to evening. The fluid drape and subtle sheen create an elegant silhouette that flatters every figure.",
    features: [
      "100% Mulberry Silk",
      "Hand-finished seams",
      "Mother-of-pearl buttons",
      "Dry clean only",
      "Made in Italy",
    ],
    images: [
      "/placeholder.svg?height=600&width=500&text=Silk+Blouse+Front",
      "/placeholder.svg?height=600&width=500&text=Silk+Blouse+Back",
      "/placeholder.svg?height=600&width=500&text=Silk+Blouse+Detail",
      "/placeholder.svg?height=600&width=500&text=Silk+Blouse+Model",
      "/placeholder.svg?height=600&width=500&text=Silk+Blouse+Fabric",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Ivory", value: "#F8F6F0" },
      { name: "Blush", value: "#F4C2C2" },
      { name: "Navy", value: "#1E3A8A" },
      { name: "Black", value: "#000000" },
    ],
    category: "Women",
    subcategory: "Tops",
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    sku: "SB-001-IV",
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const _params = await params;
  const product = products[_params.slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${product.category.toLowerCase()}`}>
              {product.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <ProductImageSlider
          images={product.images}
          productName={product.name}
        />
        <ProductDetails product={product} />
      </div>
      <div className="mt-16">
        <ProductReviews
          productId={product.id}
          rating={product.rating}
          reviewCount={product.reviewCount}
        />
      </div>
      <div className="mt-16">
        <RelatedProducts
          currentProductId={product.id}
          category={product.category}
        />
      </div>
    </main>
  );
}
