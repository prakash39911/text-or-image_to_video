-- CreateEnum
CREATE TYPE "videoGenerationStatus" AS ENUM ('InProgress', 'Completed', 'Failed');

-- AlterTable
ALTER TABLE "videoGenerationData" ADD COLUMN     "status" "videoGenerationStatus" NOT NULL DEFAULT 'InProgress';
