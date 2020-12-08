package se.kth.sda.freethinker.classDailySettings;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
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




    public ClassDailySetting(){

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
}
