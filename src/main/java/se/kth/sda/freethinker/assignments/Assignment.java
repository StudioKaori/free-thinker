package se.kth.sda.freethinker.assignments;

import javax.persistence.*;


@Entity
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;

    @Column(columnDefinition="TEXT")
    private String assignment;

    public Assignment(){

    }

    public Assignment(Long id, String type, String assignment) {
        this.id = id;
        this.type = type;
        this.assignment = assignment;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAssignment() {
        return assignment;
    }

    public void setAssignment(String assignment) {
        this.assignment = assignment;
    }
}
