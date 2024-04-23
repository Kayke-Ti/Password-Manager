/*
  Warnings:

  - Added the required column `email` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Name` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Name` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Password` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Password` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Email" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Name" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Password" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
