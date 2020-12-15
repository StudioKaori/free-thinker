package se.kth.sda.freethinker.assignmentProgress;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AssignmentProgressService {

    @Autowired
    private AssignmentProgressRepo assignmentProgressRepo;
    

    public List<AssignmentProgress> getAll() {
        return assignmentProgressRepo.findAll();
    }


    public AssignmentProgress create(AssignmentProgress newAssignmentProgress) {
        return assignmentProgressRepo.save(newAssignmentProgress);
    }

    public AssignmentProgress update(AssignmentProgress updatedAssignmentProgress) {
        return assignmentProgressRepo.save(updatedAssignmentProgress);
    }

    public void delete(Long id) {
        assignmentProgressRepo.deleteById(id);
    }


}
