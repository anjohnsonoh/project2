package com.revature.service;

import java.util.List;

import com.revature.entities.Grade;

public interface GradeService {

	public List<Grade> findAll();

	public Grade findById(int id);
	
	public Grade add(Grade grade);
	
	public Grade update(Grade request, int id);
	
	void removeGrade(int id);

	public List<Grade> getByStudentId(int studentId);
	
	public List<Grade> getByTeacherId(int teacherId);

}
