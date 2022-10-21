import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import { WithRouter } from "utils/Navigation";
import Skeleton from "react-loading-skeleton";

import NavBar from "components/NavBar";
import { useTitle } from "utils/redux/UseTitle";
import CardEditPost from "components/CardEditPost";

function EditPost(props) {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("Edit Post | Altagram");

  useTitle("Post | Altagram");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .put(`https://virtserver.swaggerhub.com/Group4-Project-FE-BE/openapi_project2_team4/1.0.0/postings/1`)
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

  return (
    <div>
      <NavBar />
      {loading ? <Skeleton /> : datas.map((datum) => <CardEditPost postingan={datum.image_url} nama={datum.name_user} caption={datum.content} />)}
    </div>
  );
}

export default WithRouter(EditPost);
