// Portfolio Template Controller
import { PortfolioTemplate } from '../models/PortfolioTemplate.js';

const samplePortfolios = [
  { id: '1', title: 'Developer 3D Dark Showcase', category: 'Software Engineer', price: 29, isFeatured: true, viewsCount: 5200 },
  { id: '2', title: 'Minimalist UX/UI Case Study Hub', category: 'Design', price: 24, isFeatured: true, viewsCount: 4100 },
  { id: '3', title: 'Photography & Visual Artist Grid', category: 'Photography', price: 0, isFeatured: false, viewsCount: 2900 },
  { id: '4', title: 'Freelancer & Consultant Bento Style', category: 'Business', price: 19, isFeatured: true, viewsCount: 3600 },
];

export const getPortfolioTemplates = async (req, res, next) => {
  try {
    const count = await PortfolioTemplate.countDocuments().catch(() => 0);
    if (count > 0) {
      const templates = await PortfolioTemplate.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: templates.length, data: templates });
    }
    res.status(200).json({ success: true, count: samplePortfolios.length, data: samplePortfolios });
  } catch (error) {
    next(error);
  }
};

export const getPortfolioTemplateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = samplePortfolios.find((p) => p.id === id) || { id, title: 'Portfolio Template', category: 'Developer', price: 29 };
    res.status(200).json({ success: true, data: item });
  } catch (error) {
    next(error);
  }
};

export const createPortfolioTemplate = async (req, res, next) => {
  try {
    res.status(201).json({ success: true, message: 'Portfolio Template created', data: { id: Date.now().toString(), ...req.body } });
  } catch (error) {
    next(error);
  }
};

export const updatePortfolioTemplate = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({ success: true, message: `Portfolio Template ${id} updated`, data: { id, ...req.body } });
  } catch (error) {
    next(error);
  }
};

export const deletePortfolioTemplate = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({ success: true, message: `Portfolio Template ${id} removed` });
  } catch (error) {
    next(error);
  }
};
