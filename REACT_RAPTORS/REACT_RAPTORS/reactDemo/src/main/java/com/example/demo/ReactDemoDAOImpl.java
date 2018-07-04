package com.example.demo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.json.simple.parser.*;

@Repository
public class ReactDemoDAOImpl implements ReactDemoDAO {
	
	@Autowired
	private NamedParameterJdbcTemplate np;
	
	@Autowired
	private JdbcTemplate jt;
    
    public void getJob()
    {
    	String sql = "select jobdet from job where jobcode = :code";
    	
    	HashMap hm = new HashMap();
    	hm.put("code", "1");
    	
    	if(np == null ) {
    		System.out.println("np is empty");
    	}else {
    		System.out.println("np is not empty");
    	}
    	List<String> res = np.queryForList(sql, hm, String.class);
    	
    	System.out.println(""+res.get(0));

    }
    
    public int getUserDetails(String emailId)
    {
    	int count = 0;
    	List<Integer> res = null;
    	try {
	    	String sql = "select userId from user_tbl where userDet->>'email'=:email";
	    	System.out.println("sql==="+sql);
	    	HashMap hm = new HashMap();
	    	hm.put("email", emailId);
	    	
	    	res =  np.queryForList(sql,hm,Integer.class);
	    	System.out.println("res=="+res);
	    	count = res.get(0);
	    	
    	}catch(Exception e) {
    		System.out.println(""+e);
    	}
    	return count;
    	
    }
    
    public String getJobDetails(int userId)
    {
    	String result = null;
    	List<String> list2=null;
    	
    	try {
	    	String sql = "select jobCodes from user_job where userId=:userId";
	    	
	    	HashMap hm = new HashMap();
	    	hm.put("userId", userId);
	    	
	    	list2 = np.queryForList(sql, hm, String.class);
	    	result = list2.get(0);
	    	
    	}catch(Exception e) {
    		System.out.println(""+e);
    	}
    	return result;
    	
    }
    
    public List<String> getJobInfo(String codes)
    {
    	List<String> list2 = null;
    	
    	try {
	    	String sql = "select jobDet from job where jobCode in ("+codes+")";
	    	
	    	HashMap hm = new HashMap();
	    	
	    	list2 = np.queryForList(sql, hm, String.class);
	    	
    	}catch(Exception e) {
    		System.out.println(""+e);
    	}
    	return list2;
    	
    }
	
}
