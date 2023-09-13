/*
  Warnings:

  - You are about to drop the column `dateOfBirth` on the `personal_information` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `personal_information` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phoneNumber]` on the table `gym_student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dateOfBirth` to the `gym_student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `gym_student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gym_student" ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "personal_information" DROP COLUMN "dateOfBirth",
DROP COLUMN "phoneNumber";

-- CreateIndex
CREATE UNIQUE INDEX "gym_student_phoneNumber_key" ON "gym_student"("phoneNumber");
