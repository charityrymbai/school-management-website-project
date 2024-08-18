/*
  Warnings:

  - You are about to drop the `ClassDays` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClassDays" DROP CONSTRAINT "ClassDays_emp_id_fkey";

-- DropTable
DROP TABLE "ClassDays";

-- CreateTable
CREATE TABLE "Subject" (
    "sub_id" SERIAL NOT NULL,
    "sub_name" TEXT NOT NULL,
    "emp_id" INTEGER NOT NULL,
    "class" INTEGER NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("sub_id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" SERIAL NOT NULL,
    "sub_id" INTEGER NOT NULL,
    "std_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "present" BOOLEAN NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "Teacher"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_sub_id_fkey" FOREIGN KEY ("sub_id") REFERENCES "Subject"("sub_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_std_id_fkey" FOREIGN KEY ("std_id") REFERENCES "Student"("std_id") ON DELETE RESTRICT ON UPDATE CASCADE;
