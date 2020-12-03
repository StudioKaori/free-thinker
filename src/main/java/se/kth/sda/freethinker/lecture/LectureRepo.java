package se.kth.sda.freethinker.lecture;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;


@Repository
public interface LectureRepo extends JpaRepository<Lecture, Long> {
    @Query(value = "SELECT * FROM lecture AS l WHERE l.unlock_time BETWEEN ?1 AND ?2", nativeQuery = true)
    List<Lecture> findAllByUnlockTime(Timestamp startDate, Timestamp endDate);


}