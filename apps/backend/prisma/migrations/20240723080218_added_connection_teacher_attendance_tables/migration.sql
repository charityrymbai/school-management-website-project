/*
  Warnings:

  - Added the required column `emp_id` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "emp_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "Teacher"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;
