package se.kth.sda.freethinker.topics;

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
public class TopicControllerTests {
    @Autowired
    TopicController topicController;

    @MockBean
    TopicService topicService;

    @Test
    public void testGetById() {
        Topic topic1 = new Topic(1L, "topic1", "topic1 description");
        Topic topic2 = new Topic(2L, "topic2", "topic2 description");

        Mockito.when(topicService.getById(1L))
                .thenReturn(Optional.of(topic1));
        Mockito.when(topicService.getById(2L))
                .thenReturn(Optional.of(topic2));

        Topic controllerTopic1 = topicController.getById(1L);
        Topic controllerTopic2 = topicController.getById(2L);

        Assertions.assertEquals(topic1.getTitle(),controllerTopic1.getTitle());
        Assertions.assertEquals(topic2.getTitle(),controllerTopic2.getTitle());
    }

    @Test
    public void testGetAll(){
        Topic topic1 = new Topic(1L, "topic1", "topic1 description");
        Topic topic2 = new Topic(2L, "topic2", "topic2 description");

        List<Topic> topics = new ArrayList<>();
        topics.add(topic1);
        topics.add(topic2);

        Mockito.when(topicService.getAll())
                .thenReturn((topics));

        List<Topic> actualTopics = topicController.getAll();

        Assertions.assertEquals(topics.size(),actualTopics.size());
        Assertions.assertEquals(topics.get(0).getTitle(),actualTopics.get(0).getTitle());
        Assertions.assertEquals(topics.get(1).getTitle(),actualTopics.get(1).getTitle());
    }

}


