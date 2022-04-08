package com.revature.controller;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.revature.entities.Grade;
import com.revature.service.GradeService;
import com.revature.service.GradeService;

@RestController
@RequestMapping(path = "grade")
public class GradeController {

	@Autowired
	GradeService gradeService;

	@GetMapping
	public List<Grade> getGrades() 
	{
		return gradeService.findAll();
	}
	
	@GetMapping(path = "{id}")
	public Grade getGradeById(@PathVariable("id") Integer id)
	{
		return gradeService.findById(id);
	}
	
	@GetMapping(path = "byStudent/{studentId}")
	public List<Grade> getGradeByStudentId(@PathVariable("studentId") Integer studentId)
	{
		return gradeService.getByStudentId(studentId);
	}
	
	@GetMapping(path = "/byTeacher/{teacherId}")
	public List<Grade> getGradeByTeacherId(@PathVariable("teacherId") Integer teacherId)
	{
		return gradeService.getByTeacherId(teacherId);
	}
	
	@PostMapping("/add")
	public void addUser(@RequestBody Grade Grade) {
		gradeService.add(Grade);
	}
	
	 @PostMapping(path = "{id}")
	 public Grade updateGrade(@PathVariable("id") Integer id, @RequestBody Grade grade) 
	 {
		 return gradeService.update(grade, id);
	 }
	 @DeleteMapping(path = "{id}")
	 public void deleteGrade(@PathVariable("id") Integer id)
	 {
		 gradeService.removeGrade(id);
	 }
	 
}