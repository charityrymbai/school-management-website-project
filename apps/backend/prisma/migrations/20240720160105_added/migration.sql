/*
  Warnings:

  - Added the required column `dueDate` to the `LibraryStd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `LibraryTeach` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LibraryStd" ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "LibraryTeach" ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL;
