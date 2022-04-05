package com.revature.controller;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.revature.entities.Student;
import com.revature.service.StudentService;

@RestController
@RequestMapping(path = "student")
public class StudentController {

	@Autowired
	StudentService studentService;

	@RequestMapping(value = "/login")
	public ModelAndView login() {
		ModelAndView mav = new ModelAndView("login");
		mav.addObject("student", new Student());
		return mav;
	}
	@GetMapping
	public List<Student> getUsers()
	{
		return studentService.findAll();
	}
	@GetMapping(path = "{id}")
	public Student getStudentById(@PathVariable("id") Integer id)
	{
		return studentService.findById(id);
	}
	
	@PostMapping("/login")
	public String login(@ModelAttribute("student") Student student) {
		Student oauthStudent = studentService.studentLogin(student.getUsername(), student.getPassword());
		System.out.print(oauthStudent);
		if (Objects.nonNull(oauthStudent)) {
			return "redirect:/student";
		} else {
			return "redirect:/login";
		}
	}
	@PostMapping("/add")
	public void addUser(@RequestBody Student student) {
		studentService.add(student);
	}
    @PostMapping(path = "{id}")
    public Student updateStudent(@PathVariable("id") Integer id, @RequestBody Student student)
    {
    	return studentService.update(student, id);
    	
    }
    @PutMapping(path="/{id}")
    public Student incrementAttendance(@PathVariable ("id") Integer id)
    {
    	Student student = studentService.findById(id);
    	student.setAttendance(student.getAttendance()+1);
    	return updateStudent(id, student);
    }
    
    @GetMapping(path="/{teacher}")
    public Student findTeacher(String teacher) {
    	return studentService.findTeacher(teacher);
    }
}
