package se.kth.sda.freethinker.subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/subjects")
public class SubjectController {

    @Autowired
    SubjectService subjectService;

    @GetMapping("")
    public List<Subject> getAll() {
            return subjectService.getAll();
    }



    @GetMapping("/{id}")
    public Subject getById(@PathVariable long id) {
        return subjectService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Subject create(@RequestBody Subject newSubject) {
        return subjectService.create(newSubject);
    }

    @PutMapping("")
    public Subject update(@RequestBody Subject updatedSubject) {
        return subjectService.update(updatedSubject);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        subjectService.delete(id);
    }
}
