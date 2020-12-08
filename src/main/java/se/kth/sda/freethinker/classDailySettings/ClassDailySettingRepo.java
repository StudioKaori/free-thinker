package se.kth.sda.freethinker.classDailySettings;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;


@Repository
public interface ClassDailySettingRepo extends JpaRepository<ClassDailySetting, Long> {

    @Query(value = "SELECT * FROM class_daily_setting AS s WHERE s.date BETWEEN ?1 AND ?2", nativeQuery = true)
    ClassDailySetting findByCertainDate(Timestamp startDate, Timestamp endDate);


    @Query(value = "UPDATE class_daily_setting SET island_theme = ?1  WHERE date = ?2 RETURNING *", nativeQuery = true)
    ClassDailySetting updateWhereDate(String islandTheme, LocalDateTime date);

}