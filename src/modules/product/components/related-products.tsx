import { ProductCard } from "@/components/global/product-card";

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

const relatedProducts = [
  {
    id: "2",
    name: "Cashmere Cardigan",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=400&width=300&text=Cashmere+Cardigan",
    rating: 4.7,
    isNew: true,
    category: "Women",
  },
  {
    id: "3",
    name: "Tailored Trousers",
    price: 159,
    image: "/placeholder.svg?height=400&width=300&text=Tailored+Trousers",
    rating: 4.8,
    isNew: false,
    category: "Women",
  },
  {
    id: "4",
    name: "Designer Scarf",
    price: 89,
    originalPrice: 129,
    image: "/placeholder.svg?height=400&width=300&text=Designer+Scarf",
    rating: 4.6,
    isNew: false,
    category: "Women",
  },
  {
    id: "5",
    name: "Pearl Necklace",
    price: 199,
    image: "/placeholder.svg?height=400&width=300&text=Pearl+Necklace",
    rating: 4.9,
    isNew: true,
    category: "Women",
  },
];

export function RelatedProducts({
  currentProductId,
  category,
}: RelatedProductsProps) {
  const filteredProducts = relatedProducts.filter(
    (product) => product.id !== currentProductId,
  );

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="mb-4 font-bold text-2xl">You Might Also Like</h2>
        <p className="text-muted-foreground">
          Complete your look with these carefully selected pieces
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
