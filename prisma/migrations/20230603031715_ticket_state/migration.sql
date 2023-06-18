-- CreateTable
CREATE TABLE `TicketState` (
    `stateId` INTEGER NOT NULL AUTO_INCREMENT,
    `ticketStateId` INTEGER NOT NULL,
    `state` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TicketState_ticketStateId_key`(`ticketStateId`),
    PRIMARY KEY (`stateId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TicketState` ADD CONSTRAINT `TicketState_ticketStateId_fkey` FOREIGN KEY (`ticketStateId`) REFERENCES `Ticket`(`ticketId`) ON DELETE RESTRICT ON UPDATE CASCADE;
