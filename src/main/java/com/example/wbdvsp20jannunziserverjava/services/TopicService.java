package com.example.wbdvsp20jannunziserverjava.services;

import com.example.wbdvsp20jannunziserverjava.models.Topic;
import com.example.wbdvsp20jannunziserverjava.repositories.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {
    @Autowired
    TopicRepository topicRepository;

    public List<Topic> findTopicsForLesson(String lid) {
        return topicRepository.findTopicsForLesson(lid);

    }
    public List<Topic> findAllTopics() {
        return (List<Topic>)topicRepository.findAll();
    }
}
