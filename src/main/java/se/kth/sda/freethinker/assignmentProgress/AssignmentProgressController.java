package se.kth.sda.freethinker.assignmentProgress;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assignmentProgress")
public class AssignmentProgressController {

    @Autowired
    AssignmentProgressService assignmentProgressService;

    @GetMapping("")
    public List<AssignmentProgress> getAll() {
        return assignmentProgressService.getAll();
    }

    @PostMapping("")
    public AssignmentProgress create(@RequestBody AssignmentProgress newAssignmentProgress) {
        return assignmentProgressService.create(newAssignmentProgress);
    }

    @PutMapping("")
    public AssignmentProgress update(@RequestBody AssignmentProgress updatedAssignmentProgress) {
        return assignmentProgressService.update(updatedAssignmentProgress);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        assignmentProgressService.delete(id);
    }
}
