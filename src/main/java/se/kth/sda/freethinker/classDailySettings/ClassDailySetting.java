package se.kth.sda.freethinker.classDailySettings;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import se.kth.sda.freethinker.assignmentProgress.AssignmentProgress;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Entity
public class ClassDailySetting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime date;

    private String islandTheme;
    private String city;
    private String monster;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "classDailySetting")
    private List<AssignmentProgress> assignmentProgresses;

    public ClassDailySetting() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getIslandTheme() {
        return islandTheme;
    }

    public void setIslandTheme(String islandTheme) {
        this.islandTheme = islandTheme;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getMonster() {
        return monster;
    }

    public void setMonster(String monster) {
        this.monster = monster;
    }
}
