-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_categoryId_fkey";

-- AlterTable
ALTER TABLE "Goal" ALTER COLUMN "startDate" SET DEFAULT (CURRENT_DATE),
ALTER COLUMN "categoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
