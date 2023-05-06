import { libraryRouter } from "./router/library";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  library: libraryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
