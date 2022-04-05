package com.revature.service;

import java.util.List;

import com.revature.entities.Student;


public interface StudentService {

	public List<Student> findAll();

	public Student findById(int id);

	public Student studentLogin(String username, String password);
	
	public Student add(Student student);
	
	public Student update(Student student, Integer id);
	
	public void delete(Integer id);
	
	public Student findTeacher(String teacher);
}
