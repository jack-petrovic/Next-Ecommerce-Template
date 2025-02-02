import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    name: "Tech Corp",
    logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    description: "Leading technology solutions provider",
  },
  {
    name: "Fashion Hub",
    logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    description: "Premium fashion retailer",
  },
  {
    name: "Home Essentials",
    logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    description: "Quality home furnishing brand",
  },
  {
    name: "Beauty Plus",
    logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    description: "Premium beauty and cosmetics brand",
  },
  {
    name: "Gadget World",
    logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    description: "Consumer electronics retailer",
  },
  {
    name: "Style Studio",
    logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    description: "Contemporary fashion brand",
  },
];

export default function Clients() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Clients</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client) => (
          <Card key={client.name}>
            <CardContent className="pt-6">
              <div className="aspect-video relative mb-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{client.name}</h3>
              <p className="text-muted-foreground">{client.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
