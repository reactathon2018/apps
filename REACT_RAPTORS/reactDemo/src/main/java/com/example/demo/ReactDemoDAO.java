package com.example.demo;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public interface ReactDemoDAO {
	public void getJob();
	public int getUserDetails(String emailId);
	public String getJobDetails(int userId);
	public List<String> getJobInfo(String codes);
}
