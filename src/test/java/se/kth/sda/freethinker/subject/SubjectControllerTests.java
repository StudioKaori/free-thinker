package se.kth.sda.freethinker.subject;

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
public class SubjectControllerTests {
    @Autowired
    SubjectController subjectController;

    @MockBean
    SubjectService subjectService;

    @Test
    public void testGetById() {
        Subject subject1 = new Subject(1L, "subject1", "subject1 description");
        Subject subject2 = new Subject(2L, "subject2", "subject2 description");

        Mockito.when(subjectService.getById(1L))
                .thenReturn(Optional.of(subject1));
        Mockito.when(subjectService.getById(2L))
                .thenReturn(Optional.of(subject2));

        Subject controllerSubject1 = subjectController.getById(1L);
        Subject controllerSubject2 = subjectController.getById(2L);

        Assertions.assertEquals(subject1.getTitle(),controllerSubject1.getTitle());
        Assertions.assertEquals(subject2.getTitle(),controllerSubject2.getTitle());
    }

    @Test
    public void testGetAll(){
        Subject subject1 = new Subject(1L, "subject1", "subject1 description");
        Subject subject2 = new Subject(2L, "subject2", "subject2 description");

        List<Subject> subjects = new ArrayList<>();
        subjects.add(subject1);
        subjects.add(subject2);

        Mockito.when(subjectService.getAll())
                .thenReturn((subjects));

        List<Subject> actualSubjects = subjectController.getAll();

        Assertions.assertEquals(subjects.size(),actualSubjects.size());
        Assertions.assertEquals(subjects.get(0).getTitle(),actualSubjects.get(0).getTitle());
        Assertions.assertEquals(subjects.get(1).getTitle(),actualSubjects.get(1).getTitle());
    }

}


