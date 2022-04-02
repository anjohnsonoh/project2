package com.revature.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entities.Student;
import com.revature.exceptions.NotFoundException;
import com.revature.repo.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	StudentRepository studentRepository;

	@Override
	public List<Student> findAll() {
		// TODO Auto-generated method stub
		return studentRepository.findAll();
	}

	@Override
	public Student findById(int id) {
		return studentRepository.findById(id).orElseThrow(NotFoundException:: new);
		// TODO Auto-generated method stub
	}

	@Override
	public Student studentLogin(String username, String password) {
		return studentRepository.findByUsernameAndPassword(username, password);
		// TODO Auto-generated method stub
	}

	@Override
	public Student add(Student student) {
		return studentRepository.save(student);
		// TODO Auto-generated method stub
		
	}

	@Override
	public Student update(Student request, Integer id) {
		Student fromDb = new Student();
		fromDb.setId(id);
		fromDb.setUsername(request.getUsername());
		fromDb.setAttendance(request.getAttendance());
		fromDb.setFirstName(request.getFirstName());
		fromDb.setLastName(request.getLastName());
		fromDb.setPassword(request.getPassword());
		return studentRepository.save(fromDb);
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Integer id) {
		studentRepository.deleteById(id);
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public Student findTeacher(String teacher) {
		return studentRepository.findTeacher(teacher);
	}
	
	

}
