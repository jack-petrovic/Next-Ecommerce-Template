import { Link } from "wouter";
import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart";

export function Navbar() {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold">Store</a>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/products">
            <a className="hover:text-primary">Products</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-primary">About</a>
          </Link>
          <Link href="/clients">
            <a className="hover:text-primary">Clients</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-primary">Contact</a>
          </Link>
          <Link href="/feedback">
            <a className="hover:text-primary">Feedback</a>
          </Link>
          <div className="relative w-64">
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <Link href="/cart">
          <Button variant="ghost" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </nav>
  );
}