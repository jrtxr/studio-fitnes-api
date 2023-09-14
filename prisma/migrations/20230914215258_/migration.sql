/*
  Warnings:

  - Added the required column `anotation` to the `personal_information` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `personal_information` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personal_information" ADD COLUMN     "anotation" TEXT NOT NULL,
ADD COLUMN     "comorbidities" TEXT[],
ADD COLUMN     "gender" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "modality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "valuation" DOUBLE PRECISION NOT NULL,
    "studentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "modality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "modality_studentId_key" ON "modality"("studentId");

-- AddForeignKey
ALTER TABLE "modality" ADD CONSTRAINT "modality_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "gym_student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
