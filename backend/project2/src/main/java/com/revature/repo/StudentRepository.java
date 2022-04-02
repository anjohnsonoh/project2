package com.revature.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revature.entities.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{

	@Query("select s from Student s where s.username = :username and s.password = :password")
	Student findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
	
	@Query("select s from Student s where s.teacher = :teacher")
	Student findTeacher(@Param("teacher") String teacher);
}
