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
	public List<Attendance> findByStudent(int id) {
		return attendanceRepository.findByStudent(id);
	}

	@Override
	public void add(Attendance attendance) {
		attendanceRepository.save(attendance);
	}

	@Override
	public Attendance approveAttendance(int id, Attendance attendance) {
		attendance.setApproved(true);
		return attendanceRepository.save(attendance);
	}
	@Override
	public List<Attendance> findUnapproved()
	{
		return attendanceRepository.findUnapproved();
	}
	@Override
	public void deleteAttendance(int id)
	{
		attendanceRepository.deleteById(id);
	}
}
