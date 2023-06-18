/*
  Warnings:

  - The primary key for the `Ticket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `ticketId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ticket` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `ticketId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`ticketId`);
