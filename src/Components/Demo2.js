import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Display from "./Display";
const Demo2 = props => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {})
      .then(response => response.json())
      .then(json => setData(json));

    return () => {
      console.log("unmounted Demo2 Component 2");
      setShow(false);
    };
  }, []);

  return (
    <div>
      <Button variant="primary" onClick={() => setShow(!show)}>
        Button2
      </Button>{" "}
      {show && <Display data={data} />}
    </div>
  );
};

export default Demo2;
