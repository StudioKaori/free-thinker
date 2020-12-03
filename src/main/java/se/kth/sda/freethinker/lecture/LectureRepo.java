package se.kth.sda.freethinker.lecture;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;


@Repository
public interface LectureRepo extends JpaRepository<Lecture, Long> {

    List<Lecture> findAllByUnlockTime(String date);



}