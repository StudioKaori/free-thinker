package se.kth.sda.freethinker.lecture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/lectures")
public class LectureController {

    @Autowired
    LectureService lectureService;

    @GetMapping("")
    public List<Lecture> getAll() {
            return lectureService.getAll();
    }

    @GetMapping("/byDate/{date}")
    public List<Lecture> findAllByUnlockTime(@PathVariable String date) {
        return lectureService.findAllByUnlockTime(date);
    }

    @GetMapping("/{id}")
    public Lecture getById(@PathVariable long id) {
        return lectureService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Lecture create(@RequestBody Lecture newLecture) {
        return lectureService.create(newLecture);
    }

    @PutMapping("")
    public Lecture update(@RequestBody Lecture updatedLecture) {
        return lectureService.update(updatedLecture);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        lectureService.delete(id);
    }
}
