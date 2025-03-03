import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "/api/*",
  cors({
    origin: "*",
    allowMethods: ["GET"],
    maxAge: 600,
    credentials: false,
  })
);

app.get("/api", async (c) => {
  return c.text("Hello World");
});

app.get("/api/connector", async (c) => {
  const connectorList: {
    id: number;
    label: string;
    status: string;
  }[] = [
    { id: 1, label: "USB TypeA", status: "Active" },
    { id: 2, label: "USB TypeB", status: "Archive" },
    { id: 3, label: "USB TypeC", status: "Active" },
    { id: 4, label: "HDMI", status: "Active" },
  ];
  return c.json(connectorList);
});

app.get("/api/color", async (c) => {
  const colorList: {
    id: number;
    label: string;
    hex_color_code: string;
    status: string;
  }[] = [
    { id: 1, label: "red", hex_color_code: "#ff0000ff", status: "Active" },
    { id: 2, label: "blue", hex_color_code: "#ff0000ff", status: "Active" },
    { id: 3, label: "green", hex_color_code: "#ff0000ff", status: "Archive" },
    { id: 4, label: "gray", hex_color_code: "#ff0000ff", status: "Active" },
  ];
  return c.json(colorList);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
