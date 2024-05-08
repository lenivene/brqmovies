import { zodResolver } from "@hookform/resolvers/zod";

export const resolverZod = (schema: any) => zodResolver(schema);
export * from "./authValidator";
