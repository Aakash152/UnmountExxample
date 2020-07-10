import React from "react";

const Display = ({ data }) => {
  return (
    <div>
      {data.map(person => (
        <p key={person.id}> {person.title}</p>
      ))}
    </div>
  );
};

export default Display;
