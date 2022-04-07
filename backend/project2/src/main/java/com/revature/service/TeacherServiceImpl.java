package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entities.Teacher;
import com.revature.exceptions.NotFoundException;
import com.revature.repo.TeacherRepository;

@Service
public class TeacherServiceImpl implements TeacherService {

	@Autowired
	TeacherRepository teacherRepository;

	@Override
	public List<Teacher> findAll() {
		return teacherRepository.findAll();
	}

	@Override
	public Teacher findById(int id) {
		return teacherRepository.findById(id).orElseThrow(NotFoundException::new);
	}

	@Override
	public Teacher teacherLogin(String username, String password) {
		return teacherRepository.findByUsernameAndPassword(username, password);
	}
	
	@Override
	public Teacher getByUsername(String username) {
		return teacherRepository.findByUsername(username);
	}

	@Override
	public Teacher add(Teacher teacher) {
		return teacherRepository.save(teacher);
	}

	@Override
	public Teacher update(Teacher request, Integer id) {
		Teacher fromDb = new Teacher();
		fromDb.setId(id);
		fromDb.setUsername(request.getUsername());
		fromDb.setPassword(request.getPassword());
		fromDb.setFirstName(request.getFirstName());
		fromDb.setLastName(request.getLastName());
		fromDb.setRole(request.getRole());
		return teacherRepository.save(fromDb);		
	}
}