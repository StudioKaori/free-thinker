package se.kth.sda.freethinker.assignments;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import se.kth.sda.freethinker.lecture.Lecture;

import java.sql.Timestamp;
import java.util.List;


@Repository
public interface AssignmentRepo extends JpaRepository<Assignment, Long> {

    @Query(value = "SELECT * FROM assignment AS a WHERE a.unlock_time BETWEEN ?1 AND ?2", nativeQuery = true)
    List<Assignment> findAllByUnlockTime(Timestamp startDate, Timestamp endDate);

}