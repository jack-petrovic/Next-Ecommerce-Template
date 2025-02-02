import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2024, we've grown from a small startup to a leading e-commerce platform. 
              Our mission is to provide high-quality products with exceptional customer service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Quality First</li>
              <li>• Customer Satisfaction</li>
              <li>• Innovation</li>
              <li>• Sustainability</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              We envision a future where online shopping is not just convenient but also 
              sustainable and personalized. We're committed to continuous improvement and 
              innovation in the e-commerce space.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
