package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.Attendance;
import com.revature.service.AttendanceService;

@RestController
@RequestMapping(path = "attendance")
public class AttendanceController {

	@Autowired
	AttendanceService attendanceService;

	@PostMapping(value = "/add")
	public void addAttendance(@RequestBody Attendance attendance) {
		attendanceService.add(attendance);
	}
	
	@GetMapping
	public List<Attendance> getAttendance() {
		return attendanceService.findAll();
	}
	
	@PostMapping(path="/{id}")
	public Attendance approveAttendance(@PathVariable ("id") int id, @RequestBody Attendance attendance) {
		return attendanceService.approveAttendance(id, attendance);
	}
	
//	@GetMapping(path="{student}")
//	public Attendance getAttendancebyStudent(@PathVariable("name") String student) {
//		return attendanceService.findByStudent(student);
//	}
	
}
