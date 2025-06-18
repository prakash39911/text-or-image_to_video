/*
  Warnings:

  - You are about to drop the column `userDataId` on the `videoGenerationData` table. All the data in the column will be lost.
  - You are about to drop the `UserData` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PurchaseDetails" DROP CONSTRAINT "PurchaseDetails_userId_fkey";

-- DropForeignKey
ALTER TABLE "videoGenerationData" DROP CONSTRAINT "videoGenerationData_userDataId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "credits" INTEGER,
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "videoGenerationData" DROP COLUMN "userDataId",
ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "UserData";

-- AddForeignKey
ALTER TABLE "videoGenerationData" ADD CONSTRAINT "videoGenerationData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDetails" ADD CONSTRAINT "PurchaseDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
