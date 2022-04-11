package com.revature.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "Attendance")
public class Attendance {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id;
	
	@Column(name = "name")
	private String studentName;

	@Column(name = "present")
	private boolean wasPresent;

	@Column(name = "excuse")
	private String excuse;

	@Column(name="receipt")
	private int receipt;
	
	@Column(name = "approved")
	private boolean approved;

	public Attendance() {
		super();
	}



	public Attendance(int id, String studentName, boolean wasPresent, String excuse, int receipt, boolean approved) {
		super();
		this.id = id;
		this.studentName = studentName;
		this.wasPresent = wasPresent;
		this.excuse = excuse;
		this.receipt = receipt;
		this.approved = approved;
	}



	public Integer getReceipt() {
		return receipt;
	}

	public void setReceipt(Integer receipt) {
		this.receipt = receipt;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public boolean isWasPresent() {
		return wasPresent;
	}

	public void setWasPresent(boolean wasPresent) {
		this.wasPresent = wasPresent;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	public void setReceipt(int receipt) {
		this.receipt = receipt;
	}

	public String getExcuse() {
		return excuse;
	}

	public void setExcuse(String excuse) {
		this.excuse = excuse;
	}
}
