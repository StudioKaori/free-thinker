package se.kth.sda.freethinker.lecture;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class LectureRestTests {

    @Autowired
    LectureService lectureService;

    @Autowired
    TestRestTemplate testRestTemplate;

    @Test
    public void testGetAllReturnEmptyArray() {
        String responseLectures = testRestTemplate.getForObject("/lectures", String.class);
        Assertions.assertEquals("[]", responseLectures);

    }

    @Test
    public void testCreate() {
        Lecture requestLecture = new Lecture(null, "title1", "body");
        Lecture responseLecture = testRestTemplate.postForObject("/lectures",requestLecture,Lecture.class);
        Assertions.assertEquals(requestLecture.getTitle(),responseLecture.getTitle());


    }

    @Test void testUpdate() {
        Lecture originalLecture =  lectureService.create(new Lecture(null, "title1", "body"));
        Lecture updatedLecture =  new Lecture(originalLecture.getId(), "title1 updated", "body updated");

        HttpEntity<Lecture> requestBody = new HttpEntity<>(updatedLecture);
        HttpEntity<Lecture>response= testRestTemplate.exchange("/lectures", HttpMethod.PUT,requestBody,Lecture.class);

        Lecture responseLecture = response.getBody();
        Assertions.assertEquals(updatedLecture.getTitle(),responseLecture.getTitle());




    }

}
