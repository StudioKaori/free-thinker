package se.kth.sda.freethinker.classDailySettings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.freethinker.lecture.Lecture;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/classDailySettings")
public class ClassDailySettingController {

    @Autowired
    ClassDailySettingService classDailySettingService;

    @GetMapping("")
    public List<ClassDailySetting> getAll() {
        return classDailySettingService.getAll();
    }



    @GetMapping("/byDate/{date}")
    public ClassDailySetting getByDate(@PathVariable String date) {
        return classDailySettingService.getByDate(date);
    }


    @PostMapping("")
    public ClassDailySetting create(@RequestBody ClassDailySetting newClassDailySetting) {
        return classDailySettingService.create(newClassDailySetting);
    }

    @PutMapping("")
    public ClassDailySetting update(@RequestBody ClassDailySetting updatedClassDailySetting) {
        return classDailySettingService.update(updatedClassDailySetting);
    }

    @PutMapping("/date")
    public ClassDailySetting updateWhereDate(@RequestBody ClassDailySetting updatedClassDailySetting) {
        return classDailySettingService.updateWhereDate(updatedClassDailySetting);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        classDailySettingService.delete(id);
    }
}
