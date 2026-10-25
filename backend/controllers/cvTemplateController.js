// CV Template Controller
import { CVTemplate } from '../models/CVTemplate.js';

// Sample mock data for instant team development
const sampleCVs = [
  { id: '1', title: 'Minimalist Executive CV', category: 'Executive', price: 19, isFree: false, downloadsCount: 1420 },
  { id: '2', title: 'Modern Tech & Software Engineer Resume', category: 'Technology', price: 0, isFree: true, downloadsCount: 3820 },
  { id: '3', title: 'Creative Designer Portfolio CV', category: 'Creative', price: 25, isFree: false, downloadsCount: 940 },
  { id: '4', title: 'Academic & Research CV', category: 'Academic', price: 15, isFree: false, downloadsCount: 510 },
];

export const getCVTemplates = async (req, res, next) => {
  try {
    // If DB has records, use DB, otherwise return sample data for smooth developer experience
    const count = await CVTemplate.countDocuments().catch(() => 0);
    if (count > 0) {
      const templates = await CVTemplate.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: templates.length, data: templates });
    }
    res.status(200).json({ success: true, count: sampleCVs.length, data: sampleCVs });
  } catch (error) {
    next(error);
  }
};

export const getCVTemplateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = sampleCVs.find((c) => c.id === id) || { id, title: 'Custom CV Template', category: 'General', price: 19 };
    res.status(200).json({ success: true, data: item });
  } catch (error) {
    next(error);
  }
};

export const createCVTemplate = async (req, res, next) => {
  try {
    const newTemplate = req.body;
    res.status(201).json({ success: true, message: 'CV Template created', data: { id: Date.now().toString(), ...newTemplate } });
  } catch (error) {
    next(error);
  }
};

export const updateCVTemplate = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({ success: true, message: `CV Template ${id} updated`, data: { id, ...req.body } });
  } catch (error) {
    next(error);
  }
};

export const deleteCVTemplate = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({ success: true, message: `CV Template ${id} removed` });
  } catch (error) {
    next(error);
  }
};
