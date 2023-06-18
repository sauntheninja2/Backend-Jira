import express from 'express';
import { createTicket , getAllTickets , getTicket , updateTicket , deleteTicket } from '../controllers/ticketController';

const router = express.Router();

router.get('/tickets' , getAllTickets);
router.get('/tickets/:ticketId' , getTicket);
router.post('/tickets/',createTicket);
router.patch('/tickets/:ticketId',updateTicket);
router.delete('/tickets/:ticketId' , deleteTicket);

export default router;