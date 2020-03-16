import React from "react";
import { Link } from "react-router-dom";
import  TopicsList  from "../TopicsList.js";

export default function Topics() {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {TopicsList.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/topics/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
