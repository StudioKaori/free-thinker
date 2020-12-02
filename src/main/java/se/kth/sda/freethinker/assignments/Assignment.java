package se.kth.sda.freethinker.assignments;

import se.kth.sda.freethinker.lecture.Lecture;


import javax.persistence.*;


@Entity
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String instruction;


   @ManyToOne
   private Lecture lecture;

    public Assignment(){

    }

    public Assignment(Long id, String title, String instruction) {
        this.id = id;
        this.title = title;
        this.instruction = instruction;

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

    public String getInstruction() {
        return instruction;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
    }

    public Lecture getLecture() {
        return lecture;
    }

    public void setLecture(Lecture lecture) {
        this.lecture = lecture;
    }



}
