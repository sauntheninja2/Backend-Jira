import { PrismaClient } from "@prisma/client";
import { Request , Response } from "express";

const prisma = new PrismaClient();

//Create a new Ticket

export const createTicket =  async (req: Request , res: Response) => {
    try {
        const {title , description} = req.body;

        const ticket = await prisma.ticket.create({
            data: {
                title,
                description,
            },
        });

        res.status(201).json({ticket });
    } catch(error){
        console.error('Error creating ticket' , error);
        res.status(500).json({error: 'Interna; server error'});
    }
}

//Get all ticket

export const getAllTickets = async(req: Request , res:Response) => {
    try{
        const ticket = await prisma.$queryRaw`SELECT * FROM Ticket`;
  res.json({ ticket });
    } catch (error) {
        console.log('Error getting tickets:' ,  error);
        res.status(500).json({error: 'Internal Server Error'})
    }
}

//Get ticket by ID

export const getTicket = async(req: Request , res:Response) => {
    try {
        const ticketId = Number(req.params.ticketId);

        const ticket = await prisma.ticket.findUnique({
            where: {
                ticketId:ticketId,
            },
        });

        if(!ticket) {
            return res.status(404).json({error: 'Ticket not found'});
        }

        res.json({ ticket});
    } catch (error) {
        console.log('Error getting ticket:' , error);
        res.status(500).json({error: 'Internal server error'})
    }
};

//Update Ticket

export const updateTicket = async(req: Request , res:Response) => {
    try{

        const { ticketId } = req.params;
        const {title , description} = req.body;

        const updateTicket = await prisma.ticket.update({
            where: {
                ticketId: Number(ticketId),
            },
            data: {
                title,
                description,
            },
        });
        res.json({  message: 'Ticket updated Succesfully' , title: updateTicket});
    } catch(error) {
        console.log('Error in updating ticket:' , error);
        res.status(500).json({error: 'Internal Server error'})
    }
};

export const deleteTicket = async (req: Request, res: Response) => {
    const { ticketId } = req.params;
  
    try {
      const deletedTicket = await prisma.ticket.delete({
        where: {
          ticketId: Number(ticketId), // Assuming the ticket ID is of type number
        },
      });
  
      res.json({ message: 'Ticket deleted successfully', ticket: deletedTicket });
    } catch (error) {
      console.error('Error deleting ticket:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
