-- CreateTable
CREATE TABLE "Student" (
    "std_id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "roll_no" INTEGER NOT NULL,
    "cgpa" DOUBLE PRECISION NOT NULL,
    "class" INTEGER NOT NULL,
    "missed" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("std_id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "emp_id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "dept" TEXT NOT NULL,
    "paid_leaves" INTEGER NOT NULL DEFAULT 20,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("emp_id")
);

-- CreateTable
CREATE TABLE "Fees" (
    "fees_reference_id" SERIAL NOT NULL,
    "std_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "paid_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "installment_no" INTEGER NOT NULL,

    CONSTRAINT "Fees_pkey" PRIMARY KEY ("fees_reference_id")
);

-- CreateTable
CREATE TABLE "ClassDays" (
    "id" INTEGER NOT NULL,
    "emp_id" INTEGER NOT NULL,
    "class" INTEGER NOT NULL,

    CONSTRAINT "ClassDays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Marks" (
    "id" INTEGER NOT NULL,
    "std_id" INTEGER NOT NULL,
    "emp_id" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,

    CONSTRAINT "Marks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryStd" (
    "id" INTEGER NOT NULL,
    "bookName" TEXT NOT NULL,
    "bookNo" INTEGER NOT NULL,
    "std_id" INTEGER NOT NULL,
    "takenOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LibraryStd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryTeach" (
    "id" INTEGER NOT NULL,
    "bookName" TEXT NOT NULL,
    "bookNo" INTEGER NOT NULL,
    "emp_id" INTEGER NOT NULL,
    "takenOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LibraryTeach_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fees" ADD CONSTRAINT "Fees_std_id_fkey" FOREIGN KEY ("std_id") REFERENCES "Student"("std_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassDays" ADD CONSTRAINT "ClassDays_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "Teacher"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Marks" ADD CONSTRAINT "Marks_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "Teacher"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Marks" ADD CONSTRAINT "Marks_std_id_fkey" FOREIGN KEY ("std_id") REFERENCES "Student"("std_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryStd" ADD CONSTRAINT "LibraryStd_std_id_fkey" FOREIGN KEY ("std_id") REFERENCES "Student"("std_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryTeach" ADD CONSTRAINT "LibraryTeach_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "Teacher"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;
