import Job from '../models/job'

export const allJobs = function() {
	return Job.find({'canid':'test'}, function(err, jobs) {
		if(err) throw err
		return jobs
	})
}
