package se.kth.sda.freethinker.subject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SubjectRepo extends JpaRepository<Subject, Long> {



}