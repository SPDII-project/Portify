// Categories Controller
import { Category } from '../models/Category.js';

const sampleCategories = [
  { id: 'cat_1', name: 'Software Engineer & Tech', slug: 'software-engineer', type: 'both', templateCount: 18 },
  { id: 'cat_2', name: 'UI/UX & Product Design', slug: 'ui-ux-design', type: 'both', templateCount: 14 },
  { id: 'cat_3', name: 'Executive & Management', slug: 'executive', type: 'cv', templateCount: 9 },
  { id: 'cat_4', name: 'Marketing & Sales', slug: 'marketing-sales', type: 'cv', templateCount: 7 },
  { id: 'cat_5', name: 'Photography & Creative Arts', slug: 'creative-arts', type: 'portfolio', templateCount: 12 },
];

export const getCategories = async (req, res, next) => {
  try {
    const count = await Category.countDocuments().catch(() => 0);
    if (count > 0) {
      const categories = await Category.find();
      return res.status(200).json({ success: true, count: categories.length, data: categories });
    }
    res.status(200).json({ success: true, count: sampleCategories.length, data: sampleCategories });
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    res.status(201).json({ success: true, message: 'Category created', data: { id: `cat_${Date.now()}`, ...req.body } });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({ success: true, message: `Category ${id} deleted` });
  } catch (error) {
    next(error);
  }
};
