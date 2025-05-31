-- CreateTable
CREATE TABLE "videoGenerationData" (
    "id" TEXT NOT NULL,
    "userPrompt" TEXT NOT NULL,
    "videoTaskId" TEXT,
    "videoUrl" TEXT,
    "musicPrompt" TEXT,
    "caption" TEXT,
    "musicUrl" TEXT,
    "mergeAudioVideoTaskID" TEXT,
    "finalVideoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userDataId" TEXT NOT NULL,

    CONSTRAINT "videoGenerationData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "videoGenerationData" ADD CONSTRAINT "videoGenerationData_userDataId_fkey" FOREIGN KEY ("userDataId") REFERENCES "UserData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
