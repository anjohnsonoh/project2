package com.revature.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Attendance")
public class Attendance {

	@Id
	@GeneratedValue
	@Column(name = "name")
	private String studentName;

	@Column(name = "absent")
	private boolean wasAbsent;

	@Column(name = "excuse")
	private String excuse;

	@Column(name="receipt")
	private Integer receipt;
	
	public Attendance() {
		super();
	}

	public Attendance(String studentName, boolean wasAbsent, String excuse, Integer receipt) {
		super();
		this.studentName = studentName;
		this.wasAbsent = wasAbsent;
		this.excuse = excuse;
		this.receipt = receipt;
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

	public boolean isWasAbsent() {
		return wasAbsent;
	}

	public void setWasAbsent(boolean wasAbsent) {
		this.wasAbsent = wasAbsent;
	}

	public String getExcuse() {
		return excuse;
	}

	public void setExcuse(String excuse) {
		this.excuse = excuse;
	}
}
