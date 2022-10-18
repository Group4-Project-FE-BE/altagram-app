import { useNavigate, useParams } from "react-router-dom";

import React from "react";

export const WithRouter = (Components) => {
  const Wrapper = (props) => {
    const params = useParams();
    const navigate = useNavigate();

    return <Components {...props} navigate={navigate} params={params} />;
  };
  return Wrapper;
};
