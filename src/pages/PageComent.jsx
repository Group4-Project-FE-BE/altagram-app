import React from "react";
import { useEffect, useState } from "react";
import { useTitle } from "utils/redux/UseTitle";

import axios from "axios";

import CardComent from "../components/CardComent";
import Skeleton from "react-loading-skeleton";

import { WithRouter } from "utils/Navigation";

const PageComent = (props) => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(0);

  useTitle("Post | Altagram");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://virtserver.swaggerhub.com/Group4-Project-FE-BE/openapi_project2_team4/1.0.0/postings?offset=20&limit=20`)
      .then((res) => {
        console.log(res);
        const { data } = res.data;
        const temp = [...datas];
        temp.push(...data);
        setData(temp);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }
  console.log(datas);

  const slides = datas;

  const containerStyles = {
    width: `100em`,
    height: `50em`,
    margin: `0 auto`,
  };

  return (
    <div>
      <div style={containerStyles}>{loading ? <Skeleton /> : datas.map((datum) => <CardComent slides={slides} />)}</div>
    </div>
  );
};

export default WithRouter(PageComent);
