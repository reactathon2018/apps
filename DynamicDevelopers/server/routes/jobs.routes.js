import { Router } from 'express';
import * as JobsController from '../controllers/jobs.controller';
const router = new Router();

// Get all Jobss
router.route('/jobs').get(JobsController.getJobs);

router.route('/jobs/:code').get(JobsController.getJobDetails);

export default router;
