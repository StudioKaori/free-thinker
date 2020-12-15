package se.kth.sda.freethinker.assignmentProgress;

import se.kth.sda.freethinker.classDailySettings.ClassDailySetting;
import se.kth.sda.freethinker.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
public class AssignmentProgress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Boolean assignmentsOfTheDayIsDone;
    
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime assignmentDate;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private User student;

    @ManyToOne
    @JoinColumn(name = "class_daily_setting_id")
    private ClassDailySetting classDailySetting;

    public AssignmentProgress() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getAssignmentsOfTheDayIsDone() {
        return assignmentsOfTheDayIsDone;
    }

    public void setAssignmentsOfTheDayIsDone(Boolean assignmentsOfTheDayIsDone) {
        this.assignmentsOfTheDayIsDone = assignmentsOfTheDayIsDone;
    }

    public User getStudent() {
        return student;
    }

    public void setStudent(User student) {
        this.student = student;
    }

    public ClassDailySetting getClassDailySetting() {
        return classDailySetting;
    }

    public void setClassDailySetting(ClassDailySetting classDailySetting) {
        this.classDailySetting = classDailySetting;
    }
}
