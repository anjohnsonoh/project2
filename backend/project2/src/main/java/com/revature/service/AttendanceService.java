package com.revature.service;

import java.util.List;

import com.revature.entities.Attendance;

public interface AttendanceService {

	public List<Attendance> findAll();

	public void add(Attendance attendance);

	public void update(Attendance attendance, boolean wasAbsent);
}
