package com.revature.repo;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revature.entities.Grade;

import antlr.collections.List;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Integer> {

	@Query("select g from Grade g where g.studentId = :studentId")
	ArrayList<Grade> findByStudentId(@Param("studentId") int studentId);
	
	@Query("select g from Grade g where g.teacherId = :teacherId" )
	ArrayList<Grade> findByTeacherId(@Param("teacherId") int teacherId);
}
