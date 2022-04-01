package com.revature.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.revature.entities.Teacher;
import com.revature.service.TeacherService;

@RestController
public class TeacherController {

	@Autowired
	TeacherService teacherService;

	@RequestMapping("/")
	public String index() {
		return "index";
	}

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
			return "redirect:/";
		} else {
			return "redirect:/login";
		}
	}
}