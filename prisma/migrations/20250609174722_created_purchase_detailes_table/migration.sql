-- CreateEnum
CREATE TYPE "payment_status" AS ENUM ('PENDING', 'CAPTURED', 'FAILED');

-- CreateTable
CREATE TABLE "PackageDetails" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "credit" INTEGER NOT NULL,
    "originalPrice" INTEGER NOT NULL,
    "sellingPrice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PackageDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseDetails" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "payment_status" "payment_status" NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "invoice_name" TEXT NOT NULL,
    "totalCredits" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "packageDetailsId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PurchaseDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PackageDetails_key_key" ON "PackageDetails"("key");

-- AddForeignKey
ALTER TABLE "PurchaseDetails" ADD CONSTRAINT "PurchaseDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDetails" ADD CONSTRAINT "PurchaseDetails_packageDetailsId_fkey" FOREIGN KEY ("packageDetailsId") REFERENCES "PackageDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
