import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";

dotenv.config();

const createPrismaClient = () =>
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

const db = globalForPrisma.prisma ?? createPrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "";
const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export { db, JWT_SECRET, PORT };
