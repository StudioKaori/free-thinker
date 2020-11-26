package se.kth.sda.freethinker.assignments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AssignmentService {

    @Autowired
    private AssignmentRepo assignmentRepo;


    /**public List<Lecture> getAll() {
        return lectureRepo.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }**/

    public List<Assignment> getAll() {
        return assignmentRepo.findAll();
    }

    public Optional<Assignment> getById(long id) {
        return assignmentRepo.findById(id);
    }

    public Assignment create(Assignment newSubject) {
        return assignmentRepo.save(newSubject);
    }

    public Assignment update(Assignment updatedSubject) {
        return assignmentRepo.save(updatedSubject);
    }

    public void delete(Long id) {
        assignmentRepo.deleteById(id);
    }




}
