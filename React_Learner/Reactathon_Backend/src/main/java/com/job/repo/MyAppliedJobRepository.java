package com.job.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.job.dto.JobDetails;
import com.job.dto.MyAppliedJob;

public interface MyAppliedJobRepository extends MongoRepository<MyAppliedJob, String> {
   
    public List<MyAppliedJob> findByJobid(String jobid);
}
