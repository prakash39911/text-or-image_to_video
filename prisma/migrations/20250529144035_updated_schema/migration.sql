/*
  Warnings:

  - A unique constraint covering the columns `[videoTaskId]` on the table `videoGenerationData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "videoGenerationData_videoTaskId_key" ON "videoGenerationData"("videoTaskId");
