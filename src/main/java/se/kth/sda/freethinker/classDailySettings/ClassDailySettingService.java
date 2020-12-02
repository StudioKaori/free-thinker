package se.kth.sda.freethinker.classDailySettings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

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
        Timestamp timestamp = Timestamp.valueOf(date);
        return classDailySettingRepo.getByDate(timestamp);
    }

    public ClassDailySetting create(ClassDailySetting newClassDailySetting) {
        return classDailySettingRepo.save(newClassDailySetting);
    }
//
//    public ClassDailySetting update(ClassDailySetting updatedClassDailySetting) {
//        return classDailySettingRepo.save(updatedClassDailySetting);
//    }
//
//    public void delete(Long id) {
//        classDailySettingRepo.deleteById(id);
//    }




}
