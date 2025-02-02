import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { products, orders, orderItems } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  // Products API
  app.get("/api/products", async (req, res) => {
    const category = req.query.category as string | undefined;
    const search = req.query.search as string | undefined;

    let query = db.select().from(products);
    
    if (category) {
      query = query.where(eq(products.category, category));
    }
    
    if (search) {
      query = query.where(eq(products.name, search));
    }

    const result = await query;
    res.json(result);
  });

  app.get("/api/products/:id", async (req, res) => {
    const product = await db.select()
      .from(products)
      .where(eq(products.id, parseInt(req.params.id)))
      .limit(1);
    
    if (!product.length) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.json(product[0]);
  });

  // Orders API
  app.post("/api/orders", async (req, res) => {
    const { customerName, email, address, items, total } = req.body;

    const order = await db.insert(orders).values({
      customerName,
      email, 
      address,
      total,
      status: "pending"
    }).returning();

    const orderItemsData = items.map((item: any) => ({
      orderId: order[0].id,
      productId: item.id,
      quantity: item.quantity,
      price: item.price
    }));

    await db.insert(orderItems).values(orderItemsData);

    res.json(order[0]);
  });

  const httpServer = createServer(app);
  return httpServer;
}
