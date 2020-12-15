package se.kth.sda.freethinker.assignmentProgress;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AssignmentProgressRepo extends JpaRepository<AssignmentProgress, Long> {
    
}