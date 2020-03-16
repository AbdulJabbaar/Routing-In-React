import React from "react";
import TopicsList from "../TopicsList.js";

export default function Resource({ match }) {
  const resource = TopicsList.find(
    ({ id }) => id === match.params.topicId
  ).resources.find(({ id }) => id === match.params.resId);

  return (
    <div>
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <a href={resource.url}>More Info...</a>
    </div>
  );
}
