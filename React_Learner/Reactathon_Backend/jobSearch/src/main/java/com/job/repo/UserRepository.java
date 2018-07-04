package com.job.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.job.dto.JobDetails;
import com.job.dto.User;

@Repository
public interface UserRepository extends MongoRepository<User, String>  {
	 public List<User> findByEmailid(String emailid);
}
