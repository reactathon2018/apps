package com.job.dto;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "user")
public class User {	
	
	 @Id
	    private String id;	   
		 @Indexed
		 //@Id
		 private String emailid;
		 private String fistname;
		 private String lastname;
		 private String mobilenumber;
		 private String password;
		// @DateTimeFormat(iso = ISO.DATE_TIME)
		 private String uploadresume;
		 //@DateTimeFormat(iso = ISO.DATE_TIME)	 
		 private String dateofbirth;		 
		 private String response;
		 
		 
		
		public String getResponse() {
			return response;
		}
		public void setResponse(String response) {
			this.response = response;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getEmailid() {
			return emailid;
		}
		public void setEmailid(String emailid) {
			this.emailid = emailid;
		}
		public String getFistname() {
			return fistname;
		}
		public void setFistname(String fistname) {
			this.fistname = fistname;
		}
		public String getLastname() {
			return lastname;
		}
		public void setLastname(String lastname) {
			this.lastname = lastname;
		}
		public String getMobilenumber() {
			return mobilenumber;
		}
		public void setMobilenumber(String mobilenumber) {
			this.mobilenumber = mobilenumber;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getUploadresume() {
			return uploadresume;
		}
		public void setUploadresume(String uploadresume) {
			this.uploadresume = uploadresume;
		}
		public String getDateofbirth() {
			return dateofbirth;
		}
		public void setDateofbirth(String dateofbirth) {
			this.dateofbirth = dateofbirth;
		}		 
		 



		 
	
}
