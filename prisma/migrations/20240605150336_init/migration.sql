/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Person_name_key";

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
