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
    @Test
    public void testDelete(){
        Topic topic1 = new Topic(1L, "topic1", "topic1 body");
        Topic topic2 = new Topic(2L, "topic2", "topic2 body");

        List<Topic> topics = new ArrayList<>();
        topics.add(topic1);
        topics.add(topic2);
        topics.remove(0);


        Mockito.when(topicService.getAll())
                .thenReturn((topics));

        topicController.delete(1L);

        List<Topic> actualTopics = topicController.getAll();
        //System.out.println("The size " + topics.size());
        Assertions.assertEquals(topics.size(),actualTopics.size());

    }

    @Test
    public void testUpdate(){
        Topic topic1 = new Topic(1L, "topic1", "topic1 body");
        Topic topic2 = new Topic(2L, "topic2", "topic2 body");

        List<Topic> topics = new ArrayList<>();
        topics.add(topic1);
        topics.add(topic2);
        topics.get(0).setTitle("topic1 updated");

        Mockito.when(topicService.getAll())
                .thenReturn((topics));

        topicController.update(new Topic(1L,"topic1 updated", "body updated"));

        List<Topic> actualTopics = topicController.getAll();

        System.out.println("The title " + topic1.getTitle());
        Assertions.assertEquals(topics.get(0).getTitle(),actualTopics.get(0).getTitle());

    }

    @Test
    public void testCreate(){
        Topic topic1 = new Topic(1L, "topic1", "topic1 body");
        Topic topic2 = new Topic(2L, "topic2", "topic2 body ");

        List<Topic> topics = new ArrayList<>();
        topics.add(topic1);
        topics.add(topic2);

        Mockito.when(topicService.getAll())
                .thenReturn((topics));

        topicController.create(new Topic(3L,"topic3", "body3"));
        topicController.create(new Topic(4L,"topic4", "body4"));

        List<Topic> actualTopics = topicController.getAll();


        Assertions.assertEquals(topics.size(),actualTopics.size());
    }
}


