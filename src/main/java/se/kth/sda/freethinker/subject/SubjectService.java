package se.kth.sda.freethinker.subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class SubjectService {

    @Autowired
    private SubjectRepo subjectRepo;


    /**public List<Lecture> getAll() {
        return lectureRepo.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }**/

    public List<Subject> getAll() {
        return subjectRepo.findAll();
    }

    public Optional<Subject> getById(long id) {
        return subjectRepo.findById(id);
    }

    public Subject create(Subject newSubject) {
        return subjectRepo.save(newSubject);
    }

    public Subject update(Subject updatedSubject) {
        return subjectRepo.save(updatedSubject);
    }

    public void delete(Long id) {
        subjectRepo.deleteById(id);
    }




}
