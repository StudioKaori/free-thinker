package se.kth.sda.freethinker.assignments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.freethinker.lecture.Lecture;

import java.util.List;

@RestController
@RequestMapping("/assignments")
public class AssignmentController {

    @Autowired
    AssignmentService assignmentService;

    @GetMapping("")
    public List<Assignment> getAll() {
            return assignmentService.getAll();
    }

    @GetMapping("/byDate/{date}")
    public List<Assignment> findAllByUnlockTime(@PathVariable String date) {
        return assignmentService.findAllByUnlockTime(date);
    }

    @GetMapping("/{id}")
    public Assignment getById(@PathVariable long id) {
        return assignmentService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Assignment create(@RequestBody Assignment newAssignment) {
        return assignmentService.create(newAssignment);
    }

    @PutMapping("")
    public Assignment update(@RequestBody Assignment updatedAssignment) {
        return assignmentService.update(updatedAssignment);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        assignmentService.delete(id);
    }
}
