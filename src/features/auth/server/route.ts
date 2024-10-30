// import { z } from "zod"
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "../schemas";

const app = new Hono().post(
  "/login",
  zValidator("json", loginSchema),
  // zValidator("param", z.object({ userId: z.number()})),
  async (c) => {
    const { email, password } = c.req.valid("json");
    // const { userId } = c.req.valid("param");
    console.log({ email, password });

    return c.json({ success: "ok" });
  }
)
.post(
  "/register",
  zValidator("json", registerSchema),
  async (c) => {
    const { name,email,password } = c.req.valid("json");

    console.log({ name, email, password });

    return c.json({ name, email, password });
  }
)

export default app;
