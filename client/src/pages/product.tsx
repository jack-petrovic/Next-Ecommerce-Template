import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@db/schema";

export default function Product() {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: [`/api/products/${id}`],
  });
  const { addItem } = useCart();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="bg-gray-200 h-[500px] rounded-lg" />
          <div className="mt-6 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3" />
            <div className="h-6 bg-gray-200 rounded w-1/4" />
            <div className="h-24 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>

          <div className="prose">
            <p>{product.description}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Availability: {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <Button
              size="lg"
              className="w-full md:w-auto"
              onClick={() => addItem(product)}
              disabled={product.stock === 0}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}