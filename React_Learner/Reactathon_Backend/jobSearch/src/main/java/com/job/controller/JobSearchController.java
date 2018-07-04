package com.job.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.job.dto.JobDetails;
import com.job.dto.MyAppliedJob;
import com.job.repo.JobDetailsRepository;
import com.job.repo.MyAppliedJobRepository;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
public class JobSearchController {

	@Autowired
	private JobDetailsRepository jobRepo;
	@Autowired
	private MyAppliedJobRepository myAppliedJobRepository;

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String hello() {
		System.out.println("zzzzzzz");
		return "hello";
	}

    @CrossOrigin
	@RequestMapping(value = "/careers/currentOpenings", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	@ApiOperation(value = "Get job details", notes = "Get job details", response = String.class)
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Sucessfull", response = String.class),
			@ApiResponse(code = 500, message = "Internal server error"), })
	public ResponseEntity<List<MyAppliedJob>> currentOpenings() throws Exception {
		System.out.println("jobDetails= {}" );
		List<MyAppliedJob> response =  myAppliedJobRepository.findAll();
		System.out.println("response= {}" + response);
		HttpHeaders headers=new HttpHeaders();
		//headers.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<List<MyAppliedJob>>(response,headers,HttpStatus.OK);
	}

	
}
