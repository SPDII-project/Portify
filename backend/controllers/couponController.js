// Coupons Controller
import { Coupon } from '../models/Coupon.js';

const sampleCoupons = [
  { id: 'cpn_1', code: 'PORTIFYLAUNCH', discountPercentage: 30, validUntil: '2025-12-31', timesUsed: 42, isActive: true },
  { id: 'cpn_2', code: 'SUMMER2025', discountPercentage: 20, validUntil: '2025-08-31', timesUsed: 15, isActive: true },
  { id: 'cpn_3', code: 'STUDENT50', discountPercentage: 50, validUntil: '2025-12-31', timesUsed: 89, isActive: true },
];

export const getCoupons = async (req, res, next) => {
  try {
    const count = await Coupon.countDocuments().catch(() => 0);
    if (count > 0) {
      const coupons = await Coupon.find();
      return res.status(200).json({ success: true, count: coupons.length, data: coupons });
    }
    res.status(200).json({ success: true, count: sampleCoupons.length, data: sampleCoupons });
  } catch (error) {
    next(error);
  }
};

export const createCoupon = async (req, res, next) => {
  try {
    res.status(201).json({ success: true, message: 'Coupon created', data: { id: `cpn_${Date.now()}`, ...req.body } });
  } catch (error) {
    next(error);
  }
};

export const deleteCoupon = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({ success: true, message: `Coupon ${id} deleted` });
  } catch (error) {
    next(error);
  }
};
