import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
const Demo = props => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setData(json));

    return () => {
      console.log("unmounted Demo Component 1");
      setShow(false);
    };
  }, []);

  return (
    <div>
      <Button variant="primary" onClick={() => setShow(!show)}>
        Button1
      </Button>{" "}
      {show && data.map(person => <p key={person.id}> {person.title}</p>)}
    </div>
  );
};

export default Demo;
