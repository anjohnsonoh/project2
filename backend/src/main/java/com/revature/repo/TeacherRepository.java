package com.revature.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revature.entities.Teacher;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Integer> {

	@Query("select t from Teacher t where t.username = :username and t.password = :password")
	Teacher findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}
