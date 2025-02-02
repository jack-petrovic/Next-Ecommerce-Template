import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

interface FeedbackForm {
  name: string;
  email: string;
  type: string;
  rating: string;
  comment: string;
}

export default function Feedback() {
  const { toast } = useToast();
  const form = useForm<FeedbackForm>();

  const onSubmit = (data: FeedbackForm) => {
    console.log(data);
    toast({
      title: "Feedback submitted",
      description: "Thank you for your feedback!",
    });
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Your Feedback</h1>

      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...form.register("name", { required: true })} />
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
              <Label htmlFor="type">Feedback Type</Label>
              <Select
                onValueChange={(value) => form.setValue("type", value)}
                defaultValue="general"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select feedback type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="product">Product Specific</SelectItem>
                  <SelectItem value="service">Customer Service</SelectItem>
                  <SelectItem value="website">Website Experience</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating">Rating</Label>
              <Select
                onValueChange={(value) => form.setValue("rating", value)}
                defaultValue="5"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">⭐⭐⭐⭐⭐ (Excellent)</SelectItem>
                  <SelectItem value="4">⭐⭐⭐⭐ (Good)</SelectItem>
                  <SelectItem value="3">⭐⭐⭐ (Average)</SelectItem>
                  <SelectItem value="2">⭐⭐ (Poor)</SelectItem>
                  <SelectItem value="1">⭐ (Very Poor)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Comments</Label>
              <Textarea
                id="comment"
                rows={5}
                placeholder="Please share your thoughts..."
                {...form.register("comment", { required: true })}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
