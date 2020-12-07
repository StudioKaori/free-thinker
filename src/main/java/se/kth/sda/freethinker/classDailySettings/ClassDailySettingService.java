package se.kth.sda.freethinker.classDailySettings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;


@Service
public class ClassDailySettingService {

    @Autowired
    private ClassDailySettingRepo classDailySettingRepo;


    /**public List<ClassDailySetting> getAll() {
     return classDailySettingRepo.findAll(Sort.by(Sort.Direction.DESC, "id"));
     }**/

    public List<ClassDailySetting> getAll() {
        return classDailySettingRepo.findAll();
    }

    public ClassDailySetting getByDate(String date) {
        Timestamp startDate= Timestamp.valueOf(date +" 00:00:00");
        Timestamp endDate= Timestamp.valueOf(date +" 23:59:59");
        return classDailySettingRepo.findByCertainDate(startDate, endDate);
    }

    public ClassDailySetting create(ClassDailySetting newClassDailySetting) {
        return classDailySettingRepo.save(newClassDailySetting);
    }

    public ClassDailySetting update(ClassDailySetting updatedClassDailySetting) {
        return classDailySettingRepo.save(updatedClassDailySetting);
    }

    public ClassDailySetting updateWhereDate(ClassDailySetting updatedClassDailySetting) {
        String islandTheme = updatedClassDailySetting.getIslandTheme();
        Timestamp timestamp = updatedClassDailySetting.getDate();
        return classDailySettingRepo.updateWhereDate(islandTheme,timestamp);
    }

    public void delete(Long id) {
        classDailySettingRepo.deleteById(id);
    }




}
