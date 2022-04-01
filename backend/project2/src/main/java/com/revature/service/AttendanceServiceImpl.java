package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entities.Attendance;
import com.revature.repo.AttendanceRepository;

@Service
public class AttendanceServiceImpl implements AttendanceService {

	@Autowired
	AttendanceRepository attendanceRepository;

	@Override
	public List<Attendance> findAll() {
		return attendanceRepository.findAll();
	}

	@Override
	public void add(Attendance attendance) {
		attendanceRepository.save(attendance);
	}

	@Override
	public void update(Attendance attendance, boolean wasAbsent) {
		attendanceRepository.save(attendance);
	}
}
