import React from "react";
import { Link } from "react-router-dom";
import TopicsList from "../TopicsList.js";

export default function Topic({ match }) {
  debugger;
  const topic = TopicsList.find(({ id }) => id === match.params.topicId);

  return (
    <div>
      <h2> {topic.name}</h2>
      <h2>{topic.description}</h2>

      <ul>
        {topic.resources.map(res => (
          <li key="res.id">
            <Link to={`/topics/${match.params.topicId}/${res.id}`}>
              {res.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
