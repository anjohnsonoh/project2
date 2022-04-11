package com.revature.service;

import java.util.List;

import com.revature.entities.Attendance;

public interface AttendanceService {

	public List<Attendance> findAll();

	public void add(Attendance attendance);

	public Attendance approveAttendance(int id, Attendance attendance);
	
	public List<Attendance> findByStudent(int id);
	
	public List<Attendance> findUnapproved();
	
	public void deleteAttendance(int id);
}
