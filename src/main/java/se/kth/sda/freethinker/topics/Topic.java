package se.kth.sda.freethinker.topics;

import javax.persistence.*;

import se.kth.sda.freethinker.lecture.Lecture;
import se.kth.sda.freethinker.subject.Subject;

import java.util.List;


@Entity
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;


    @ManyToOne
    private Subject subject;

    @OneToMany
    public List<Lecture> lecture;



    public Topic() {
    }



    public Topic(Long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;


    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public List<Lecture> getLecture() {
        return lecture;
    }

    public void setLecture(List<Lecture> lecture) {
        this.lecture = lecture;
    }
}
