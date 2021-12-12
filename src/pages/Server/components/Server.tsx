import React from "react";
import { useParams } from "react-router-dom";

const Server = () => {
  const params = useParams();

  return <h1>Server {params.id} is Running</h1>;
};

export default Server;
