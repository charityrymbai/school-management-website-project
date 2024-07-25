/*
  Warnings:

  - Added the required column `password` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Admin" (
    "ad_id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("ad_id")
);
