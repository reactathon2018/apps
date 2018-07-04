package com.job.dto;

import java.sql.Timestamp;
import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Document(collection = "jobdetail")
public class JobDetails {

	@Id
    private String id;
	
    private String jobid;
	 @Indexed
	 private String technologies;
	 private String jobDescription;
	 private String designation;
	 private String experience;
	 private String joblocation;
	// @DateTimeFormat(iso = ISO.DATE_TIME)
	 private String Postingdate;
	 //@DateTimeFormat(iso = ISO.DATE_TIME)	 
	 private String lastdatetoApply;
	 //private Date last_date_to_Apply;
	 private String qulification;
	 private String travelrequired;
	 private String Hiringmanager;
	 
	 
	@Override
	public String toString() {
		return "JobDetails [id=" + id + ", jobid=" + jobid + ", technologies=" + technologies + ", jobDescription="
				+ jobDescription + ", designation=" + designation + ", experience=" + experience + ", joblocation="
				+ joblocation + ", Postingdate=" + Postingdate + ", lastdatetoApply=" + lastdatetoApply
				+ ", qulification=" + qulification + ", travelrequired=" + travelrequired + ", Hiringmanager="
				+ Hiringmanager + ", getId()=" + getId() + ", getJobid()=" + getJobid() + ", getTechnologies()="
				+ getTechnologies() + ", getJobDescription()=" + getJobDescription() + ", getDesignation()="
				+ getDesignation() + ", getExperience()=" + getExperience() + ", getJoblocation()=" + getJoblocation()
				+ ", getPostingdate()=" + getPostingdate() + ", getLastdatetoApply()=" + getLastdatetoApply()
				+ ", getQulification()=" + getQulification() + ", getTravelrequired()=" + getTravelrequired()
				+ ", getHiringmanager()=" + getHiringmanager() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getJobid() {
		return jobid;
	}
	public void setJobid(String jobid) {
		this.jobid = jobid;
	}
	public String getTechnologies() {
		return technologies;
	}
	public void setTechnologies(String technologies) {
		this.technologies = technologies;
	}
	public String getJobDescription() {
		return jobDescription;
	}
	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getJoblocation() {
		return joblocation;
	}
	public void setJoblocation(String joblocation) {
		this.joblocation = joblocation;
	}
	public String getPostingdate() {
		return Postingdate;
	}
	public void setPostingdate(String postingdate) {
		Postingdate = postingdate;
	}
	public String getLastdatetoApply() {
		return lastdatetoApply;
	}
	public void setLastdatetoApply(String lastdatetoApply) {
		this.lastdatetoApply = lastdatetoApply;
	}
	public String getQulification() {
		return qulification;
	}
	public void setQulification(String qulification) {
		this.qulification = qulification;
	}
	public String getTravelrequired() {
		return travelrequired;
	}
	public void setTravelrequired(String travelrequired) {
		this.travelrequired = travelrequired;
	}
	public String getHiringmanager() {
		return Hiringmanager;
	}
	public void setHiringmanager(String hiringmanager) {
		Hiringmanager = hiringmanager;
	}
	 
	 
	
	

	
	
	 
}
