import { defineOpenAPIConnection } from "eve/connections";

export default defineOpenAPIConnection({
  spec: "https://vercel-agentic-swag-store-api.vercel.app/api/openapi.json",
  baseUrl: "https://vercel-agentic-swag-store-api.vercel.app/api",
  description:
    "Vercel Ship It Shop storefront: browse the product catalog, check stock levels, manage carts, view orders, process returns, and access back-office data for sales, support tickets, and inventory.",
  headers: {
    "x-vercel-protection-bypass": process.env.BYPASS_SECRET ?? "OykROcuULI6YJwAwk3VnWv4gMMbpAq6q",
  },
});
