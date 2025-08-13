import { ProductCard } from "@/components/global/product-card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Silk Blouse",
    price: 189,
    originalPrice: 249,
    image: "/placeholder.svg?height=400&width=300",
    category: "Women",
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: "Tailored Blazer",
    price: 299,
    image: "/placeholder.svg?height=400&width=300",
    category: "Women",
    rating: 4.9,
    isNew: false,
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    price: 159,
    image: "/placeholder.svg?height=400&width=300",
    category: "Men",
    rating: 4.7,
    isNew: true,
  },
  {
    id: 4,
    name: "Designer Jeans",
    price: 129,
    originalPrice: 179,
    image: "/placeholder.svg?height=400&width=300",
    category: "Men",
    rating: 4.6,
    isNew: false,
  },
  {
    id: 5,
    name: "Evening Dress",
    price: 399,
    image: "/placeholder.svg?height=400&width=300",
    category: "Women",
    rating: 4.9,
    isNew: true,
  },
  {
    id: 6,
    name: "Leather Jacket",
    price: 449,
    image: "/placeholder.svg?height=400&width=300",
    category: "Unisex",
    rating: 4.8,
    isNew: false,
  },
  {
    id: 7,
    name: "Summer Dress",
    price: 89,
    originalPrice: 129,
    image: "/placeholder.svg?height=400&width=300",
    category: "Women",
    rating: 4.5,
    isNew: false,
  },
  {
    id: 8,
    name: "Oxford Shirt",
    price: 79,
    image: "/placeholder.svg?height=400&width=300",
    category: "Men",
    rating: 4.7,
    isNew: false,
  },
];

export function ProductGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-3xl lg:text-4xl">
            Featured Products
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our handpicked selection of premium fashion pieces that
            define contemporary style and elegance.
          </p>
        </div>
        <div className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
