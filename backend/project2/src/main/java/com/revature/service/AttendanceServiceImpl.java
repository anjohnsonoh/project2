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
	public Attendance findByStudent(String student) {
		return attendanceRepository.findByStudent(student);
	}

	@Override
	public void add(Attendance attendance) {
		attendanceRepository.save(attendance);
	}

	@Override
	public Attendance update(Attendance request, boolean wasAbsent) {
		Attendance fromDb = new Attendance();
		fromDb.setStudentName(request.getStudentName());
		fromDb.setWasAbsent(wasAbsent);
		fromDb.setExcuse(request.getExcuse());
		fromDb.setReceipt(request.getReceipt());
		return attendanceRepository.save(fromDb);
	}
}
