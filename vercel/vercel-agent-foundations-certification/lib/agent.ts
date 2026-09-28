/**
 * This is where your agent will live.
 *
 * During the workshop you'll define a `ToolLoopAgent` here, give it a model
 * and instructions, and later add tools (web search, sandbox, etc.). The
 * route handler in `app/api/chat/route.ts` and the `useChat` call in
 * `components/agent-chat.tsx` will both import from this file.
 *
 * Workshop docs: https://agent-foundations-certification.vercel.app/docs/chat-agent
 */

import {
  ToolLoopAgent,
  type InferAgentUIMessage,
  type UIToolInvocation,
} from "ai";
import {getAllCategories, returnOrder, searchProducts, getProductDetails} from "@/lib/tools";

export const shoppingAgent = new ToolLoopAgent({
  model: "anthropic/claude-sonnet-4.6",
  instructions: "You are a helpful shopping assistant. You will answer questions about products, provide recommendations, " +
    "and assist with online shopping tasks. Be polite, concise, and informative in your responses. Do not offer discounts without checking first. If you don't know the answer, say so. " +
    "When asked about a type or category of product use the getAllCategories tool for getting valid categories before using searchProducts.\n" +
    " When the user wants to return an order, use the returnOrder tool. Ask for the order ID and reason if they haven't provided them. Example order IDs are 11111, 22222, and 33333." +
    " When the user wants to know more about a specific product, use the getProductDetails tool. Ask for the product ID if they haven't provided it. Example product IDs are 1, 2, and 3.",
  tools: { searchProducts, getAllCategories, returnOrder, getProductDetails },
});

export type ShoppingAgentUIMessage = InferAgentUIMessage<typeof shoppingAgent>;
export type SearchProductsToolInvocation = UIToolInvocation<typeof searchProducts>;
export type ProductDetailsToolInvocation = UIToolInvocation<typeof getProductDetails>;