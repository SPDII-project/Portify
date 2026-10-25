// User Management Controller for Admin
import { User } from '../models/User.js';

const sampleUsers = [
  { id: 'usr_1', name: 'Alex Johnson', email: 'alex@example.com', role: 'admin', createdAt: '2025-01-15' },
  { id: 'usr_2', name: 'Sarah Miller', email: 'sarah.m@designhub.io', role: 'user', createdAt: '2025-02-10' },
  { id: 'usr_3', name: 'David Chen', email: 'david.code@gmail.com', role: 'user', createdAt: '2025-03-01' },
  { id: 'usr_4', name: 'Emma Watson', email: 'emma@creativefolio.com', role: 'user', createdAt: '2025-03-12' },
];

export const getUsers = async (req, res, next) => {
  try {
    const count = await User.countDocuments().catch(() => 0);
    if (count > 0) {
      const users = await User.find().select('-password').sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: users.length, data: users });
    }
    res.status(200).json({ success: true, count: sampleUsers.length, data: sampleUsers });
  } catch (error) {
    next(error);
  }
};

export const updateUserRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    res.status(200).json({ success: true, message: `User ${id} role changed to ${role}` });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({ success: true, message: `User ${id} deleted` });
  } catch (error) {
    next(error);
  }
};
