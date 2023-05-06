import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const libraryRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.library.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        location: z.string(),
        type: z.enum(["eagle", "pixcall", "billfish"]),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.library.create({ data: input });
    }),
});
