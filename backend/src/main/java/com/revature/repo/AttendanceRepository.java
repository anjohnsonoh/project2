package com.revature.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.entities.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {
}
