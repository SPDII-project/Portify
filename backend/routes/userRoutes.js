import express from 'express';
import { getUsers, updateUserRole, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Routes for /api/users
router.get('/', getUsers);
router.patch('/:id/role', updateUserRole);
router.delete('/:id', deleteUser);

export default router;
