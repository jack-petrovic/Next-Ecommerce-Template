import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";

interface CheckoutForm {
  customerName: string;
  email: string;
  address: string;
}

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  
  const form = useForm<CheckoutForm>({
    defaultValues: {
      customerName: "",
      email: "",
      address: "",
    },
  });

  const onSubmit = async (data: CheckoutForm) => {
    try {
      await apiRequest("POST", "/api/orders", {
        ...data,
        items,
        total,
      });
      
      clearCart();
      toast({
        title: "Order placed successfully",
        description: "Thank you for your purchase!",
      });
      setLocation("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="customerName">Name</Label>
            <Input
              id="customerName"
              {...form.register("customerName", { required: true })}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email", { required: true })}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Shipping Address</Label>
            <Input
              id="address"
              {...form.register("address", { required: true })}
            />
          </div>

          <div className="border-t pt-6 mt-6">
            <div className="flex justify-between text-lg font-medium mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <Button type="submit" className="w-full" size="lg">
              Place Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
