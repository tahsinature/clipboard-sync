import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

let clipboard = null;

const app = new Hono();
app.use("*", logger());
app.use("*", serveStatic({ root: "/src/assets" }));

app.post("/api/clipboard", async (c) => {
  const body = await c.req.json<{
    data: string;
  }>();
  console.log(body);

  return c.json({ success: true });
});

app.get("/api/clipboard", (c) => {
  return c.json({ data: clipboard });
});

export default app;
