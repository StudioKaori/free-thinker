package se.kth.sda.freethinker.subject;

import se.kth.sda.freethinker.topics.Topic;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "subjects")
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="title")
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    //one Subject can have many topics
    @OneToMany
    public List<Topic> topic;


    public Subject(){

    }

    public Subject(Long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;

    }


    public List<Topic> getTopic() {
        return topic;
    }

    public void setTopic(List <Topic> topic) {
        this.topic = topic;
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

}
