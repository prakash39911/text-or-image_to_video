import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

const packages = [
  { key: "starter", credit: 5, originalPrice: 60000, sellingPrice: 50000 },
  {
    key: "professional",
    credit: 10,
    originalPrice: 120000,
    sellingPrice: 100000,
  },
  {
    key: "enterprise",
    credit: 20,
    originalPrice: 240000,
    sellingPrice: 200000,
  },
];

async function seedPackageDetails() {
  await prisma.packageDetails.createMany({
    data: packages,
    skipDuplicates: true,
  });
}

async function main() {
  await seedPackageDetails();
}

main()
  .catch((e) => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
