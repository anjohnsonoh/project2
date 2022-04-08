package com.revature.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Grade")

public class Grade {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id;

	@Column(name = "pointsPossible")
	private int pointsPossible;

	@Column(name = "pointsCorrect")
	private int pointsCorrect;

	@Column(name = "studentId")
	private int studentId;

	@Column(name = "teacherId")
	private int teacherId;
	
	@Override
	public String toString() {
		return "Grade [id=" + id + ", pointsPossible=" + pointsPossible + ", pointsCorrect=" + pointsCorrect
				+ ", studentId=" + studentId + ", teacherId=" + teacherId + "]";
	}

	public Grade(int id, int pointsPossible, int pointsCorrect, int studentId, int teacherId) {
		super();
		this.id = id;
		this.pointsPossible = pointsPossible;
		this.pointsCorrect = pointsCorrect;
		this.studentId = studentId;
		this.teacherId = teacherId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPointsPossible() {
		return pointsPossible;
	}

	public void setPointsPossible(int pointsPossible) {
		this.pointsPossible = pointsPossible;
	}

	public int getPointsCorrect() {
		return pointsCorrect;
	}

	public void setPointsCorrect(int pointsCorrect) {
		this.pointsCorrect = pointsCorrect;
	}

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public int getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(int teacherId) {
		this.teacherId = teacherId;
	}

	public Grade() {
		super();
	}

	

	
}
