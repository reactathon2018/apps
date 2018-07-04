package com.example.demo;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReactDemoServiceImpl implements ReactDemoService {
	
	@Autowired
	ReactDemoDAO dao;
	
	public void getJob()
	{
		dao.getJob();
	}
	
	public int getUserDetails(String emailId)
	{
		int value = dao.getUserDetails(emailId);
		return value;
	}
	
	public String getJobDetails(int userId)
	{
		return dao.getJobDetails(userId);
	}
	public List<String> getJobInfo(String codes)
	{
		return dao.getJobInfo(codes);
	}
}
