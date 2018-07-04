package com.example.demo;

import java.util.Iterator;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.postgresql.ds.PGPoolingDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.json.simple.parser.*;

@RestController
public class ReactDemoController {
	
	@Autowired
	ReactDemoConfiguration reactDemoConfiguration;
	
	@Autowired
	ReactDemoService serv;

	@RequestMapping(value = "/reactathon/testReactDemo", method = RequestMethod.GET)
	public String testReactDemo (String value) throws Exception{
		System.out.println("Entering reacteDemo");
		String response = null;
		try {
			response = value;
			PGPoolingDataSource ds = reactDemoConfiguration.datasource();
			
			if(ds != null) {
				System.out.println("Data Base Connection Success");
			}else {
				System.out.println("Data Base Connection Failure");
			}
			
			serv.getJob();
			
		}catch(Exception e){
			System.out.println("Error in reactdemo");
			throw new Exception(e);
		}
		return response;
	}
	
	@RequestMapping(value = "/reactathon/getJobDetailsForUser", method = RequestMethod.GET)
	public String getJobDetailsForUser (String emailId, String uniqueId) throws Exception{
		System.out.println("Entering getJobDetailsForUser");
		String finalResponse = null;
		try {
			
			JSONParser jsonParser = new JSONParser();
			//JSONObject jsonObj = (JSONObject)jsonParser.parse(inpData);
			//JSONObject obj2 = jsonObj.get("data") != null ? (JSONObject) jsonObj.get("data"):null;
			
			//String emailId = obj2.get("emailId")!=null ? obj2.get("emailId").toString():"";
			//String uniqueId = obj2.get("uniqueId")!=null ? obj2.get("uniqueId").toString():"";
			
			//System.out.println("inpData--> "+inpData);
			System.out.println("emailId--> "+emailId);
			System.out.println("uniqueId--> "+uniqueId);
			
			int userId = serv.getUserDetails(emailId);
			System.out.println("userId--> "+userId);
			
			if(userId != 0)
			{
				 String jdet = serv.getJobDetails(userId);
				 System.out.println("jdet --> "+jdet);
				 JSONObject jobDet =(JSONObject)jsonParser.parse(jdet);
				
				if(jobDet!=null)
				{
					 JSONArray arra1 = (JSONArray)jobDet.get("codes");
					 String finalValues = "";
					 Iterator<JSONObject> ite = arra1.iterator();
					 
					 while(ite.hasNext())
					 {
						 finalValues = finalValues + "'"+ite.next()+"',";
					 }
					 
					 
					System.out.println("finalValues  1--> "+finalValues);
					List<String> arr = null;
					if(finalValues != null && finalValues.trim().length() > 0)
					{
						finalValues = finalValues.substring(0, finalValues.length()-1);
						System.out.println("finalValues  2--> "+finalValues);
						arr = serv.getJobInfo(finalValues.trim());
					}
					
					System.out.println("arr :: "+arr.size());
					
					JSONArray jArr = new JSONArray();
					for(int j =0; j < arr.size() ; j++){
						
						jArr.add(arr.get(j));
					}
					
					JSONObject jobj = new JSONObject();
					
					jobj.put("statusId",0);
					jobj.put("statusMsg", "SUCCESS");
					jobj.put("jobDetails",jArr);
					
					finalResponse = jobj.toString();
					
					
				}else {
					JSONObject jobj = new JSONObject();
					
					jobj.put("statusId",0);
					jobj.put("statusMsg", "No job code applied");
					
					finalResponse = jobj.toString();
				}
				
			}else {
				JSONObject jobj = new JSONObject();
				
				jobj.put("statusId",0);
				jobj.put("statusMsg", "No such user exists");
				
				finalResponse = jobj.toString();
			}
			
			
		}catch(Exception e){
			System.out.println("Error in reactdemo");
			throw new Exception(e);
		}
		System.out.println("finalResponse--> "+finalResponse);
		return finalResponse;
	}
}
