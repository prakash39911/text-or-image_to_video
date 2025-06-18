/*
  Warnings:

  - Made the column `userId` on table `videoGenerationData` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "videoGenerationData" DROP CONSTRAINT "videoGenerationData_userId_fkey";

-- AlterTable
ALTER TABLE "videoGenerationData" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "videoGenerationData" ADD CONSTRAINT "videoGenerationData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
