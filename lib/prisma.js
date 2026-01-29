import { PrismaClient } from '@/lib/generated/prisma';

/**
 * Prisma Client Singleton
 * Prevents multiple instances of Prisma Client in development due to Next.js hot-reloading
 */

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
