package com.student.controller;


import com.student.entity.student;
import com.student.service.studentservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/students")
public class studentcontroller {

    @Autowired
    private studentservice studentService;

    @GetMapping
    public List<student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Optional<student> getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @PostMapping
    public student addStudent(@RequestBody student student) {
        return studentService.addStudent(student);
    }

    @PutMapping("/{id}")
    public student updateStudent(@PathVariable Long id, @RequestBody student student) {
        return studentService.updateStudent(id, student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}