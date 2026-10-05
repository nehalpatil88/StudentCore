package com.student.repository;


import com.student.entity.student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Studentrepo extends JpaRepository<student, Long> {
}