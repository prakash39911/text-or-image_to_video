/*
  Warnings:

  - You are about to drop the column `totalCredits` on the `PurchaseDetails` table. All the data in the column will be lost.
  - Added the required column `creditPurchased` to the `PurchaseDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseDetails" DROP COLUMN "totalCredits",
ADD COLUMN     "creditPurchased" INTEGER NOT NULL,
ALTER COLUMN "contact" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP DEFAULT;
