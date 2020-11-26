package se.kth.sda.freethinker.topics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TopicService {
    @Autowired
    private TopicRepo topicRepo;


    public List<Topic> getAll() {
        return topicRepo.findAll();
    }

    public Optional<Topic> getById(long id) {
        return topicRepo.findById(id);
    }

    public Topic create(Topic newTopic) {
        return topicRepo.save(newTopic);
    }

    public Topic update(Topic updatedTopic) {
        return topicRepo.save(updatedTopic);
    }

    public void delete(Long id) {
        topicRepo.deleteById(id);
    }

    /*public List<Topic> findAllByArticleId(Long articleId) {
        return topicRepo.findAllByArticles_id(articleId);
    }*/
}
