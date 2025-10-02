-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL DEFAULT 'Anonimous',
    "absent" INTEGER NOT NULL,
    "authorClass" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);
