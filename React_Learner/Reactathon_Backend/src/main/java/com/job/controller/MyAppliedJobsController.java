package com.job.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.job.dto.JobDetails;
import com.job.dto.MyAppliedJob;
import com.job.dto.User;
import com.job.repo.JobDetailsRepository;
import com.job.repo.MyAppliedJobRepository;
import com.job.repo.UserRepository;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
@RestController
public class MyAppliedJobsController {

	@Autowired
	MyAppliedJobRepository myAppliedJobRepository;
	@Autowired
	JobDetailsRepository jobDetailsRepository;
	
	@Autowired
	UserRepository userRepository;

		@CrossOrigin
		@RequestMapping(value = "/careers/getAllJobDetails", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
		@ApiOperation(value = "Get registartion details", notes = "registartion job details", response = String.class)
		@ApiResponses(value = { @ApiResponse(code = 200, message = "Sucessfull", response = String.class),
				@ApiResponse(code = 500, message = "Internal server error"), })
		public ResponseEntity<List<MyAppliedJob>> getAllJobDetails() throws Exception {
			System.out.println("jobDetails= {}" );
			List<MyAppliedJob> response =  myAppliedJobRepository.findAll();
			System.out.println("response= {}" + response);
			HttpHeaders headers=new HttpHeaders();
			//headers.setContentType(MediaType.APPLICATION_JSON);
			return new ResponseEntity<List<MyAppliedJob>>(response,headers,HttpStatus.OK);
		}
		
		@CrossOrigin
		@RequestMapping(value = "/careers/getJobDetails/{jobid}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
		@ApiOperation(value = "validate user", notes = "validate user", response = String.class)
		@ApiResponses(value = { @ApiResponse(code = 200, message = "Sucessfull", response = String.class),
				@ApiResponse(code = 500, message = "Internal server error"), })
		public ResponseEntity<List<MyAppliedJob>> getJobDetails(@PathVariable String jobid) throws Exception {
			System.out.println("jobDetails= {}"+jobid);
			List<MyAppliedJob> response =  myAppliedJobRepository.findByJobid(jobid);
			System.out.println("response= {}" + response);
			HttpHeaders headers=new HttpHeaders();
			
			return new ResponseEntity<List<MyAppliedJob>>(response,headers,HttpStatus.OK);
		}
		
		@CrossOrigin
		@RequestMapping(value = "/careers/applyJob", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
		@ApiOperation(value = "add user", notes = "add user", response = String.class)
		@ApiResponses(value = { @ApiResponse(code = 200, message = "Sucessfull", response = String.class),
				@ApiResponse(code = 500, message = "Internal server error"), })
		public List<Map<String,String>> applyJob(@RequestBody MyAppliedJob myAppliedJob) throws Exception {
			System.out.println("myAppliedJob= {}"+myAppliedJob);
			List<Map<String,String>> object = new ArrayList<Map<String,String>>();
			MyAppliedJob response = null;
			System.out.println("jobDetails= {}"+myAppliedJobRepository.existsById(myAppliedJob.getJobid()));
			Map<String,String> obj = new HashMap<String, String>();
			if(!myAppliedJobRepository.existsById(myAppliedJob.getJobid()))
			{
				System.out.println("jobDetails= {}"+myAppliedJobRepository.findByJobid(myAppliedJob.getJobid()));
			 response =   myAppliedJobRepository.save(myAppliedJob);
			// jobDetailsRepository.save(myAppliedJob);
			 JobDetails jd=new JobDetails();
			 jd.setDesignation(myAppliedJob.getDesignation());
			 jd.setExperience(myAppliedJob.getExperience());
			 jd.setHiringmanager(myAppliedJob.getHiringmanager());
			 jd.setJobDescription(myAppliedJob.getJobDescription());
			 jd.setJobid(myAppliedJob.getJobid());
			 jd.setJoblocation(myAppliedJob.getJoblocation());
			 jd.setLastdatetoApply(myAppliedJob.getLastdatetoApply());
			 jd.setPostingdate(myAppliedJob.getPostingdate());
			 jd.setQulification(myAppliedJob.getQulification());
			 jd.setTechnologies(myAppliedJob.getTechnologies());
			 jd.setTravelrequired(myAppliedJob.getTravelrequired());
			 
			 User user=new User();
			 user.setEmailid(myAppliedJob.getEmailid());
			 user.setDateofbirth(myAppliedJob.getDateofbirth());
			 user.setFistname(myAppliedJob.getFistname());
			 user.setLastname(myAppliedJob.getLastname());
			 user.setMobilenumber(myAppliedJob.getMobilenumber());
			 
			 userRepository.save(user);
			 
			 jobDetailsRepository.save(jd);
			 obj.put("Success", " added successfully Applied for job-"+myAppliedJob.getJobDescription());
			}
			else
			{
				obj.put("failure", "Already applied for this job");
			}		
			System.out.println("response= {}" + response);
			object.add(obj);
			return  object;
		}
		
		@CrossOrigin
		@RequestMapping(value = "/careers/jobUpdate", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE})
		@ApiOperation(value = "add user", notes = "add user", response = String.class)
		@ApiResponses(value = { @ApiResponse(code = 200, message = "Sucessfull", response = String.class),
				@ApiResponse(code = 500, message = "Internal server error"), })
		public List<Map<String,String>> jobUpdate(@RequestBody MyAppliedJob myAppliedJob) throws Exception {
			System.out.println("myAppliedJob= {}"+myAppliedJob);
			List<Map<String,String>> object = new ArrayList<Map<String,String>>();
			MyAppliedJob response = null;
			String jobSysid=null;
			System.out.println("jobDetails= {}"+myAppliedJobRepository.existsById(myAppliedJob.getJobid()));
			Map<String,String> obj = new HashMap<String, String>();
			if(myAppliedJobRepository.existsById(myAppliedJob.getJobid()))
			{
				List<MyAppliedJob> res =	myAppliedJobRepository.findByJobid(myAppliedJob.getJobid());
				List<MyAppliedJob> appliedJob = new ArrayList<MyAppliedJob>();   
				for(MyAppliedJob dto:res){  
					MyAppliedJob myajob = new MyAppliedJob();  
					System.out.println("my appliced job id"+dto.getId());
					jobSysid =dto.getId();
					myAppliedJob.setJobid(jobSysid);
				}   
					
				
			}
			myAppliedJob.setJobid(jobSysid);
			if(myAppliedJobRepository.existsById(myAppliedJob.getJobid()))
			{
			 
			 response =   myAppliedJobRepository.save(myAppliedJob);
			// jobDetailsRepository.save(myAppliedJob);
			 JobDetails jd=new JobDetails();
			 jd.setDesignation(myAppliedJob.getDesignation());
			 jd.setExperience(myAppliedJob.getExperience());
			 jd.setHiringmanager(myAppliedJob.getHiringmanager());
			 jd.setJobDescription(myAppliedJob.getJobDescription());
			 jd.setJobid(myAppliedJob.getJobid());
			 jd.setJoblocation(myAppliedJob.getJoblocation());
			 jd.setLastdatetoApply(myAppliedJob.getLastdatetoApply());
			 jd.setPostingdate(myAppliedJob.getPostingdate());
			 jd.setQulification(myAppliedJob.getQulification());
			 jd.setTechnologies(myAppliedJob.getTechnologies());
			 jd.setTravelrequired(myAppliedJob.getTravelrequired());
			 
			 User user=new User();
			 user.setEmailid(myAppliedJob.getEmailid());
			 user.setDateofbirth(myAppliedJob.getDateofbirth());
			 user.setFistname(myAppliedJob.getFistname());
			 user.setLastname(myAppliedJob.getLastname());
			 user.setMobilenumber(myAppliedJob.getMobilenumber());
			 
			 userRepository.save(user);
			 
			 jobDetailsRepository.save(jd);
			 obj.put("Success", " added successfully Applied for job-"+myAppliedJob.getJobDescription());
			}
			else
			{
				obj.put("failure", "Already applied for this job");
			}		
			System.out.println("response= {}" + response);
			object.add(obj);
			return  object;
		}
		
		
}
