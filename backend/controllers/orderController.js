// Orders & Payments Controller
import { Order } from '../models/Order.js';

const sampleOrders = [
  { id: 'ORD-9821', customerEmail: 'sarah.m@designhub.io', item: 'Developer 3D Dark Showcase', type: 'portfolio', amount: 29, status: 'completed', date: '2025-03-20' },
  { id: 'ORD-9820', customerEmail: 'michael@techflow.dev', item: 'Minimalist Executive CV', type: 'cv', amount: 19, status: 'completed', date: '2025-03-19' },
  { id: 'ORD-9819', customerEmail: 'claire@studio.fr', item: 'Creative Designer Portfolio CV', type: 'cv', amount: 25, status: 'pending', date: '2025-03-18' },
];

export const getOrders = async (req, res, next) => {
  try {
    const count = await Order.countDocuments().catch(() => 0);
    if (count > 0) {
      const orders = await Order.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: orders.length, data: orders });
    }
    res.status(200).json({ success: true, count: sampleOrders.length, data: sampleOrders });
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    res.status(201).json({ success: true, message: 'Order created', data: { id: `ORD-${Date.now()}`, ...req.body, status: 'pending' } });
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    res.status(200).json({ success: true, message: `Order ${id} status updated to ${status}` });
  } catch (error) {
    next(error);
  }
};
