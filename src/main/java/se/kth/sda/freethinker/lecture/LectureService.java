package se.kth.sda.freethinker.lecture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Timestamp;
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

    public List<Lecture> findAllByUnlockTime(String date) {
        Timestamp startDate= Timestamp.valueOf(date +" 00:00:00");
        Timestamp endDate= Timestamp.valueOf(date +" 23:59:59");
        return lectureRepo.findAllByUnlockTime(startDate,endDate);
    }


}
