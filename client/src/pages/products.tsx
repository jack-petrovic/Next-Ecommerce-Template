import { useQuery } from "@tanstack/react-query";
import { ProductGrid } from "@/components/product/product-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";
import type { Product } from "@db/schema";

export default function Products() {
  const [category, setCategory] = useState<string>();
  const [search, setSearch] = useState("");

  const { data: products } = useQuery<Product[]>({
    queryKey: ["/api/products", { category, search }],
  });

  const categories = ["Electronics", "Fashion", "Home", "Beauty"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-64 space-y-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Categories</h3>
            <div className="space-y-2">
              <Button
                variant={category === undefined ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setCategory(undefined)}
              >
                All Products
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          {products ? (
            <ProductGrid products={products} />
          ) : (
            <div>Loading products...</div>
          )}
        </div>
      </div>
    </div>
  );
}