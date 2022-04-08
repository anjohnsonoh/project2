package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entities.Grade;
import com.revature.entities.Teacher;
import com.revature.exceptions.NotFoundException;
import com.revature.repo.GradeRepository;

@Service
public class GradeServiceImpl implements GradeService {
	
	@Autowired
	GradeRepository gradeRepository;
	
	@Override
	public List<Grade> findAll(){
		
		return gradeRepository.findAll();
	}

	@Override
	public Grade findById(int id) {
		return gradeRepository.findById(id).orElseThrow(NotFoundException::new);
	}
	@Override
	public Grade add(Grade grade)
	{
		return gradeRepository.save(grade);
	}
	@Override
	public Grade update(Grade request, int id)
	{
		Grade fromDb = new Grade();
		fromDb.setId(id);
		fromDb.setPointsCorrect(request.getPointsCorrect());
		fromDb.setPointsPossible(request.getPointsPossible());
		fromDb.setStudentId(request.getStudentId());
		fromDb.setTeacherId(request.getTeacherId());
		return gradeRepository.save(fromDb);
	}
	@Override
	public void removeGrade(int id)
	{
		gradeRepository.deleteById(id);
	}
	@Override
	public List<Grade> getByStudentId(int studentId)
	{
		return gradeRepository.findByStudentId(studentId);
	}
	@Override
	public List<Grade> getByTeacherId(int teacherId)
	{
		return gradeRepository.findByTeacherId(teacherId);
	}

}
