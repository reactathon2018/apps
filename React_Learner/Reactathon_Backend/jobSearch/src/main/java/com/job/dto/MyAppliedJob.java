package com.job.dto;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "myappliedjob")
public class MyAppliedJob {
	
	
    private String id;	   
	 @Indexed
	 @Id
	 private String jobid;
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
	 
	 private String eligibility;
	 private String interviewSchedule;
	 private String intDate;
	 private String interviewStatus;
	 private String recruitersFeedback;
	 private String additionalRound;
	 private String interviewLocation;
	 private String uploadDocument;
	 private String bcVerificationStatus;
	 private String offerLetterStatus;
	 private String candidateFeedback;
	 
	 
	 
	 
	 
	@Override
	public String toString() {
		return "MyAppliedJob [id=" + id + ", jobid=" + jobid + ", technologies=" + technologies + ", jobDescription="
				+ jobDescription + ", designation=" + designation + ", experience=" + experience + ", joblocation="
				+ joblocation + ", Postingdate=" + Postingdate + ", lastdatetoApply=" + lastdatetoApply
				+ ", qulification=" + qulification + ", travelrequired=" + travelrequired + ", Hiringmanager="
				+ Hiringmanager + ", emailid=" + emailid + ", fistname=" + fistname + ", lastname=" + lastname
				+ ", mobilenumber=" + mobilenumber + ", password=" + password + ", uploadresume=" + uploadresume
				+ ", dateofbirth=" + dateofbirth + ", response=" + response + ", eligibility=" + eligibility
				+ ", interviewSchedule=" + interviewSchedule + ", intDate=" + intDate + ", interviewStatus="
				+ interviewStatus + ", recruitersFeedback=" + recruitersFeedback + ", additionalRound="
				+ additionalRound + ", interviewLocation=" + interviewLocation + ", uploadDocument=" + uploadDocument
				+ ", bcVerificationStatus=" + bcVerificationStatus + ", offerLetterStatus=" + offerLetterStatus
				+ ", candidateFeedback=" + candidateFeedback + ", getId()=" + getId() + ", getJobid()=" + getJobid()
				+ ", getTechnologies()=" + getTechnologies() + ", getJobDescription()=" + getJobDescription()
				+ ", getDesignation()=" + getDesignation() + ", getExperience()=" + getExperience()
				+ ", getJoblocation()=" + getJoblocation() + ", getPostingdate()=" + getPostingdate()
				+ ", getLastdatetoApply()=" + getLastdatetoApply() + ", getQulification()=" + getQulification()
				+ ", getTravelrequired()=" + getTravelrequired() + ", getHiringmanager()=" + getHiringmanager()
				+ ", getEmailid()=" + getEmailid() + ", getFistname()=" + getFistname() + ", getLastname()="
				+ getLastname() + ", getMobilenumber()=" + getMobilenumber() + ", getPassword()=" + getPassword()
				+ ", getUploadresume()=" + getUploadresume() + ", getDateofbirth()=" + getDateofbirth()
				+ ", getResponse()=" + getResponse() + ", getEligibility()=" + getEligibility()
				+ ", getInterviewSchedule()=" + getInterviewSchedule() + ", getIntDate()=" + getIntDate()
				+ ", getInterviewStatus()=" + getInterviewStatus() + ", getRecruitersFeedback()="
				+ getRecruitersFeedback() + ", getAdditionalRound()=" + getAdditionalRound()
				+ ", getInterviewLocation()=" + getInterviewLocation() + ", getUploadDocument()=" + getUploadDocument()
				+ ", getBcVerificationStatus()=" + getBcVerificationStatus() + ", getOfferLetterStatus()="
				+ getOfferLetterStatus() + ", getCandidateFeedback()=" + getCandidateFeedback() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
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
	public String getResponse() {
		return response;
	}
	public void setResponse(String response) {
		this.response = response;
	}
	public String getEligibility() {
		return eligibility;
	}
	public void setEligibility(String eligibility) {
		this.eligibility = eligibility;
	}
	public String getInterviewSchedule() {
		return interviewSchedule;
	}
	public void setInterviewSchedule(String interviewSchedule) {
		this.interviewSchedule = interviewSchedule;
	}
	public String getIntDate() {
		return intDate;
	}
	public void setIntDate(String intDate) {
		this.intDate = intDate;
	}
	public String getInterviewStatus() {
		return interviewStatus;
	}
	public void setInterviewStatus(String interviewStatus) {
		this.interviewStatus = interviewStatus;
	}
	public String getRecruitersFeedback() {
		return recruitersFeedback;
	}
	public void setRecruitersFeedback(String recruitersFeedback) {
		this.recruitersFeedback = recruitersFeedback;
	}
	public String getAdditionalRound() {
		return additionalRound;
	}
	public void setAdditionalRound(String additionalRound) {
		this.additionalRound = additionalRound;
	}
	public String getInterviewLocation() {
		return interviewLocation;
	}
	public void setInterviewLocation(String interviewLocation) {
		this.interviewLocation = interviewLocation;
	}
	public String getUploadDocument() {
		return uploadDocument;
	}
	public void setUploadDocument(String uploadDocument) {
		this.uploadDocument = uploadDocument;
	}
	public String getBcVerificationStatus() {
		return bcVerificationStatus;
	}
	public void setBcVerificationStatus(String bcVerificationStatus) {
		this.bcVerificationStatus = bcVerificationStatus;
	}
	public String getOfferLetterStatus() {
		return offerLetterStatus;
	}
	public void setOfferLetterStatus(String offerLetterStatus) {
		this.offerLetterStatus = offerLetterStatus;
	}
	public String getCandidateFeedback() {
		return candidateFeedback;
	}
	public void setCandidateFeedback(String candidateFeedback) {
		this.candidateFeedback = candidateFeedback;
	}
	 
	 
	 
	
}
