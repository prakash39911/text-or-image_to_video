/*
  Warnings:

  - You are about to drop the column `musicTaskId` on the `videoGenerationData` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "videoGenerationData_musicTaskId_key";

-- AlterTable
ALTER TABLE "videoGenerationData" DROP COLUMN "musicTaskId";
