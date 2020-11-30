package se.kth.sda.freethinker.lecture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class LectureService {

    @Autowired
    private LectureRepo lectureRepo;


    /**public List<Lecture> getAll() {
        return lectureRepo.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }**/

    public List<Lecture> getAll() {
        return lectureRepo.findAll();
    }

    public Optional<Lecture> getById(long id) {
        return lectureRepo.findById(id);
    }

    public Lecture create(Lecture newLecture) {
        return lectureRepo.save(newLecture);
    }

    public Lecture update(Lecture updatedLecture) {
        return lectureRepo.save(updatedLecture);
    }

    public void delete(Long id) {
        lectureRepo.deleteById(id);
    }




}
