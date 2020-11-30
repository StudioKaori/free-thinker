package se.kth.sda.freethinker.lecture;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootTest
public class LectureControllerTests {
    @Autowired
    LectureController lectureController;

    @MockBean
    LectureService lectureService;

   @Test
   public void testGetById() {
       Lecture lecture1 = new Lecture(1L, "lecture1", "lecture for reading english");
       Lecture lecture2 = new Lecture(2L, "lecture2", "lecture for reading english 3 letter words");

       Mockito.when(lectureService.getById(1L))
               .thenReturn(Optional.of(lecture1));
       Mockito.when(lectureService.getById(2L))
               .thenReturn(Optional.of(lecture2));

       Lecture controllerLecture1 = lectureController.getById(1L);
       Lecture controllerLecture2 = lectureController.getById(2L);

       Assertions.assertEquals(lecture1.getTitle(),controllerLecture1.getTitle());
       Assertions.assertEquals(lecture2.getTitle(),controllerLecture2.getTitle());
   }

   @Test
    public void testGetAll(){
       Lecture lecture1 = new Lecture(1L, "lecture1", "lecture for reading english");
       Lecture lecture2 = new Lecture(2L, "lecture2", "lecture for reading english 3 letter words");

       List<Lecture> lectures = new ArrayList<>();
       lectures.add(lecture1);
       lectures.add(lecture2);

       Mockito.when(lectureService.getAll())
               .thenReturn((lectures));

       List<Lecture> actualLectures = lectureController.getAll();

       Assertions.assertEquals(lectures.size(),actualLectures.size());
       Assertions.assertEquals(lectures.get(0).getTitle(),actualLectures.get(0).getTitle());
       Assertions.assertEquals(lectures.get(1).getTitle(),actualLectures.get(1).getTitle());
   }
    @Test
    public void testDelete(){
        Lecture lecture1 = new Lecture(1L, "lecture1", "lecture for reading english");
        Lecture lecture2 = new Lecture(2L, "lecture2", "lecture for reading english 3 letter words");

        List<Lecture> lectures = new ArrayList<>();
        lectures.add(lecture1);
        lectures.add(lecture2);
        lectures.remove(0);


        Mockito.when(lectureService.getAll())
                .thenReturn((lectures));

        lectureController.delete(1L);

        List<Lecture> actualLectures = lectureController.getAll();
        //System.out.println("The size " + lectures.size());
        Assertions.assertEquals(lectures.size(),actualLectures.size());

    }

    @Test
    public void testUpdate(){
        Lecture lecture1 = new Lecture(1L, "lecture1", "lecture for reading english");
        Lecture lecture2 = new Lecture(2L, "lecture2", "lecture for reading english 3 letter words");

        List<Lecture> lectures = new ArrayList<>();
        lectures.add(lecture1);
        lectures.add(lecture2);
        lectures.get(0).setTitle("lecture1 updated");

        Mockito.when(lectureService.getAll())
                .thenReturn((lectures));

        lectureController.update(new Lecture(1L,"lecture1 updated", "body updated"));

        List<Lecture> actualLectures = lectureController.getAll();

        System.out.println("The title " + lecture1.getTitle());
        Assertions.assertEquals(lectures.get(0).getTitle(),actualLectures.get(0).getTitle());

    }

    @Test
    public void testCreate(){
        Lecture lecture1 = new Lecture(1L, "lecture1", "lecture for reading english");
        Lecture lecture2 = new Lecture(2L, "lecture2", "lecture for reading english 3 letter words");

        List<Lecture> lectures = new ArrayList<>();
        lectures.add(lecture1);
        lectures.add(lecture2);

        Mockito.when(lectureService.getAll())
                .thenReturn((lectures));

        lectureController.create(new Lecture(3L,"lecture3", "body3"));
        lectureController.create(new Lecture(4L,"lecture4", "body4"));

        List<Lecture> actualLectures = lectureController.getAll();


        Assertions.assertEquals(lectures.size(),actualLectures.size());
    }
}
