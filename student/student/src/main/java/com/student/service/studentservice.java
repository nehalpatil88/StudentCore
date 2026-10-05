package com.student.service;

import com.student.entity.student;
import com.student.repository.Studentrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class studentservice {
    @Autowired
    private Studentrepo studentRepository;

    public List<student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public student addStudent(student student) {
        return studentRepository.save(student);
    }

    public student updateStudent(Long id, student updatedStudent) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setName(updatedStudent.getName());
                    student.setEmail(updatedStudent.getEmail());
                    student.setCourse(updatedStudent.getCourse());
                    return studentRepository.save(student);
                }).orElse(null);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}