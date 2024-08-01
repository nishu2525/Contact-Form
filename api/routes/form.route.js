import express from 'express';
import { form } from '../controllers/form.controller.js';

const router =express.Router();
router.post('/contact',form)

export default router;