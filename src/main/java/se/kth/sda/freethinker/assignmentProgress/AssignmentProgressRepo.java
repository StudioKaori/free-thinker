package se.kth.sda.freethinker.assignmentProgress;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda.freethinker.user.User;

import java.util.List;


@Repository
public interface AssignmentProgressRepo extends JpaRepository<AssignmentProgress, Long> {

    List<AssignmentProgress> getAllByStudentOrderById(User student);

}