import express from 'express';
import {
  getCVTemplates,
  getCVTemplateById,
  createCVTemplate,
  updateCVTemplate,
  deleteCVTemplate,
} from '../controllers/cvTemplateController.js';

const router = express.Router();

// Routes for /api/cv-templates
router.get('/', getCVTemplates);
router.get('/:id', getCVTemplateById);
router.post('/', createCVTemplate);
router.put('/:id', updateCVTemplate);
router.delete('/:id', deleteCVTemplate);

export default router;
