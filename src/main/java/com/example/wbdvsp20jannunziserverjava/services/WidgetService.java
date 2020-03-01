package com.example.wbdvsp20jannunziserverjava.services;

import com.example.wbdvsp20jannunziserverjava.models.Topic;
import com.example.wbdvsp20jannunziserverjava.models.Widget;
import com.example.wbdvsp20jannunziserverjava.repositories.TopicRepository;
import com.example.wbdvsp20jannunziserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;
import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository widgetRepository;

    @Autowired
    TopicRepository topicRepository;

    public Widget createWidget(Integer topicId, Widget widget) {
        Topic topic = topicRepository.findById(topicId).get();
        widget.setTopic(topic);
        return widgetRepository.save(widget);
    }

    public int deleteWidget(Integer wid) {
        widgetRepository.deleteById(wid);
        return 1;
    }

    public Widget findWidgetById(Integer wid) {
        return widgetRepository.findById(wid).get();
    }

    public List<Widget> findWidgetsForTopic(Integer topicId) {
        Topic topic = topicRepository.findById(topicId).get();
        return topic.getWidgets();
//        return widgetRepository.findWidgetsForTopic(topicId);
    }

    public List<Widget> findAllWidgets() {
        return (List<Widget>)
                widgetRepository
                .findAll();
    }
}
