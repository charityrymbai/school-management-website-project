/*
  Warnings:

  - You are about to drop the column `bookName` on the `LibraryStd` table. All the data in the column will be lost.
  - You are about to drop the column `bookName` on the `LibraryTeach` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bookNo]` on the table `LibraryStd` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bookNo]` on the table `LibraryTeach` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE librarystd_id_seq;
ALTER TABLE "LibraryStd" DROP COLUMN "bookName",
ALTER COLUMN "id" SET DEFAULT nextval('librarystd_id_seq');
ALTER SEQUENCE librarystd_id_seq OWNED BY "LibraryStd"."id";

-- AlterTable
CREATE SEQUENCE libraryteach_id_seq;
ALTER TABLE "LibraryTeach" DROP COLUMN "bookName",
ALTER COLUMN "id" SET DEFAULT nextval('libraryteach_id_seq');
ALTER SEQUENCE libraryteach_id_seq OWNED BY "LibraryTeach"."id";

-- AlterTable
CREATE SEQUENCE marks_id_seq;
ALTER TABLE "Marks" ALTER COLUMN "id" SET DEFAULT nextval('marks_id_seq');
ALTER SEQUENCE marks_id_seq OWNED BY "Marks"."id";

-- CreateTable
CREATE TABLE "LibraryBooks" (
    "id" SERIAL NOT NULL,
    "bookNo" INTEGER NOT NULL,
    "bookName" TEXT NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LibraryBooks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LibraryBooks_bookNo_key" ON "LibraryBooks"("bookNo");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryStd_bookNo_key" ON "LibraryStd"("bookNo");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryTeach_bookNo_key" ON "LibraryTeach"("bookNo");

-- AddForeignKey
ALTER TABLE "LibraryStd" ADD CONSTRAINT "LibraryStd_bookNo_fkey" FOREIGN KEY ("bookNo") REFERENCES "LibraryBooks"("bookNo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryTeach" ADD CONSTRAINT "LibraryTeach_bookNo_fkey" FOREIGN KEY ("bookNo") REFERENCES "LibraryBooks"("bookNo") ON DELETE RESTRICT ON UPDATE CASCADE;
