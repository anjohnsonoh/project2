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
}