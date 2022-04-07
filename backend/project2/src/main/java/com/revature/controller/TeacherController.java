package com.revature.controller;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.revature.entities.Teacher;
import com.revature.service.TeacherService;

@RestController
@RequestMapping(path = "teacher")

public class TeacherController {

	@Autowired
	TeacherService teacherService;

	@RequestMapping(value = "/login")
	public ModelAndView login() {
		ModelAndView mav = new ModelAndView("login");
		mav.addObject("teacher", new Teacher());
		return mav;
	}

	@PostMapping("/login")
	public String login(@ModelAttribute("teacher") Teacher teacher) {
		Teacher oauthTeacher = teacherService.teacherLogin(teacher.getUsername(), teacher.getPassword());
		System.out.print(oauthTeacher);
		if (Objects.nonNull(oauthTeacher)) {
			return "redirect:/teacher";
		} else {
			return "redirect:/login";
		}
	}
	
	@GetMapping
	public List<Teacher> getTeachers() {
		return teacherService.findAll();
	}
	
	@GetMapping(path = "{id}")
	public Teacher getTeacherById(@PathVariable("id") Integer id) {
		return teacherService.findById(id);
	}
	
	@PostMapping("/add")
	public void addUser(@RequestBody Teacher teacher) {
		teacherService.add(teacher);
	}
	
	 @PostMapping(path = "{id}")
	    public Teacher updateTeacher(@PathVariable("id") Integer id, @RequestBody Teacher teacher) {
	    	return teacherService.update(teacher, id);
	    }
	 
	 @RequestMapping(path = "/byUsername/{username}",  method = RequestMethod.GET)
		public Teacher getTeacherByUsername(@PathVariable("username") String username)
		{
			return teacherService.getByUsername(username);
		}
}