/*
  Warnings:

  - A unique constraint covering the columns `[imageTaskId]` on the table `videoGenerationData` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[musicTaskId]` on the table `videoGenerationData` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mergeAudioVideoTaskID]` on the table `videoGenerationData` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "videoGenerationData" ADD COLUMN     "imageTaskId" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "musicTaskId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "videoGenerationData_imageTaskId_key" ON "videoGenerationData"("imageTaskId");

-- CreateIndex
CREATE UNIQUE INDEX "videoGenerationData_musicTaskId_key" ON "videoGenerationData"("musicTaskId");

-- CreateIndex
CREATE UNIQUE INDEX "videoGenerationData_mergeAudioVideoTaskID_key" ON "videoGenerationData"("mergeAudioVideoTaskID");
