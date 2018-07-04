import Job from '../models/job';
import JobDetails from '../models/jobDetails';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getJobs(req, res) {
  Job.find().sort('-dateAdded').exec((err, jobs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ jobs });
  });
}

export function getJobDetails(req, res) {
  JobDetails.findOne({ code: req.params.code }).sort('-dateAdded').exec((err, jobDetails) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ jobDetails });
  });
}