package se.kth.sda.freethinker.classDailySettings;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;



@Repository
public interface ClassDailySettingRepo extends JpaRepository<ClassDailySetting, Long> {

ClassDailySetting getByDate(Timestamp timestamp);

}