package se.kth.sda.freethinker.assignments;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AssignmentRepo extends JpaRepository<Assignment, Long> {



}