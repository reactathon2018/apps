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
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.job.dto.JobDetails;
import com.job.dto.User;
import com.job.repo.UserRepository;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
@RestController
public class UserDetailsController {
@Autowired
UserRepository userRepository;

	@CrossOrigin
	@RequestMapping(value = "/careers/registartion", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	@ApiOperation(value = "Get registartion details", notes = "registartion job details", response = String.class)
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Sucessfull", response = String.class),
			@ApiResponse(code = 500, message = "Internal server error"), })
	public ResponseEntity<List<User>> registartionDetails() throws Exception {
		System.out.println("jobDetails= {}" );
		List<User> response =  userRepository.findAll();
		System.out.println("response= {}" + response);
		HttpHeaders headers=new HttpHeaders();
		//headers.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<List<User>>(response,headers,HttpStatus.OK);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/careers/validateuser/{emailid}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
	@ApiOperation(value = "validate user", notes = "validate user", response = String.class)
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Sucessfull", response = String.class),
			@ApiResponse(code = 500, message = "Internal server error"), })
	public ResponseEntity<List<User>> validateuser(@PathVariable String emailid) throws Exception {
		System.out.println("jobDetails= {}"+emailid);
		List<User> response =  userRepository.findByEmailid(emailid);
		System.out.println("response= {}" + response);
		HttpHeaders headers=new HttpHeaders();
		
		return new ResponseEntity<List<User>>(response,headers,HttpStatus.OK);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/careers/adduser", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
	@ApiOperation(value = "add user", notes = "add user", response = String.class)
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Sucessfull", response = String.class),
			@ApiResponse(code = 500, message = "Internal server error"), })
	public List<Map<String,String>> adduser(@RequestBody User user) throws Exception {
		System.out.println("careers/adduser Json::::::::= {}"+user);
		List<Map<String,String>> object = new ArrayList<Map<String,String>>();
		User response = null;
		System.out.println("mail :"+user.getEmailid()+"\n dob:"+user.getDateofbirth()+"\n firstname:"+user.getFistname()+"\n lastename:"+user.getLastname()+"\n mobilenumebr"+user.getMobilenumber());
		
		System.out.println("Emaild existing or not ::"+userRepository.existsById(user.getEmailid()));
		Map<String,String> obj = new HashMap<String, String>();
		if(!userRepository.existsById(user.getEmailid()))
		{
			System.out.println("im in New User");
		 response =   userRepository.save(user);
		 obj.put("Success", "User added successfully");
		}
		else
		{
			System.out.println("im in New User");
			obj.put("failure", "User already existing");
		}		
		System.out.println("response= {}" + response);
		object.add(obj);
		return  object;
	}
}
