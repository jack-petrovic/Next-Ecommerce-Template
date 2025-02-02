import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ProductGrid } from "@/components/product/product-grid";
import type { Product } from "@db/schema";

export default function Home() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div className="flex-1">
      <section className="relative h-[500px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
            Discover Our Latest Collection
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-xl">
            Shop the latest trends and find your perfect style with our curated selection of products.
          </p>
          <Link href="/products">
            <Button size="lg" className="mt-8">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-square rounded-lg" />
                <div className="mt-4 space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-2/3" />
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          products && <ProductGrid products={products.slice(0, 4)} />
        )}
      </section>
    </div>
  );
}