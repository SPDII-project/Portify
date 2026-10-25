import express from 'express';
import {
  getPortfolioTemplates,
  getPortfolioTemplateById,
  createPortfolioTemplate,
  updatePortfolioTemplate,
  deletePortfolioTemplate,
} from '../controllers/portfolioTemplateController.js';

const router = express.Router();

// Routes for /api/portfolio-templates
router.get('/', getPortfolioTemplates);
router.get('/:id', getPortfolioTemplateById);
router.post('/', createPortfolioTemplate);
router.put('/:id', updatePortfolioTemplate);
router.delete('/:id', deletePortfolioTemplate);

export default router;
