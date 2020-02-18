package com.example.wbdvsp20jannunziserverjava.repositories;

import com.example.wbdvsp20jannunziserverjava.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepository
    extends CrudRepository<Widget, Integer> {

    // SELECT * FROM widgets WHERE topic_id=tid
    @Query(value = "SELECT * FROM widgets WHERE topic_id=:tid",
            nativeQuery = true)
    public List<Widget> findWidgetsForTopic
            (@Param("tid") Integer topicId);
}
