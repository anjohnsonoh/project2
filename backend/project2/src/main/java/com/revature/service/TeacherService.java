package com.revature.service;

import java.util.List;

import com.revature.entities.Teacher;

public interface TeacherService {

	public List<Teacher> findAll();

	public Teacher findById(int id);
	
	public Teacher add(Teacher teacher);
	
	public Teacher update(Teacher request, Integer id);

	public Teacher teacherLogin(String username, String password);
	
	public Teacher getByUsername(String username);

}
