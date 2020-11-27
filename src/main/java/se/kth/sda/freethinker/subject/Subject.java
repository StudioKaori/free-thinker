package se.kth.sda.freethinker.subject;

import se.kth.sda.freethinker.topics.Topic;

import javax.persistence.*;
import java.util.List;


@Entity
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

   //public List<Topic> topic;


    public Subject(){

    }

    public Subject(Long id, String title, String description) {
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

    /*public Topic getTopics() {
        return topics;
    }

    public void setTopics(Topic topics) {
        this.topics = topics;
    }*/

}
