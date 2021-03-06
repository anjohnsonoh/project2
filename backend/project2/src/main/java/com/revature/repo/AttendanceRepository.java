package com.revature.repo;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revature.entities.Attendance;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {
	
	@Query("select a from Attendance a where a.receipt = :id")
	ArrayList<Attendance> findByStudent(@Param("id") int id);
	@Query("select a from Attendance a where a.approved = false")
	ArrayList<Attendance> findUnapproved();
}
