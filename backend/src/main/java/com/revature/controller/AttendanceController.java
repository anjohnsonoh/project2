package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.revature.entities.Attendance;
import com.revature.service.AttendanceService;

public class AttendanceController {

	@Autowired
	AttendanceService attendanceService;

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ModelAndView save(@ModelAttribute Attendance attendance) {
		attendanceService.add(attendance);
		List<Attendance> a = attendanceService.findAll();
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName(""); // needs view
		modelAndView.addObject("attendance", a);
		return modelAndView;
	}

}
