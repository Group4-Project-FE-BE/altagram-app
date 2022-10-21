import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { BsSearch } from "react-icons/bs";
import "../styles/ListPosting.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { WithRouter } from "utils/Navigation";

import { useTitle } from "utils/redux/UseTitle";

import CardPost from "components/CardPost";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const ListPosting = (props) => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useTitle("Post | Altagram");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`http://13.212.207.162:8000/postings/`)
      .then((res) => {
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
    <>
      <NavBar />

      <div>
        <Container>
          <div className="grid col-lg-4 py-lg-5 my-3">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn" type="submit">
                <BsSearch />
              </button>
            </form>
          </div>

          <div className="d-flex flex-cols-lg-3 mb-3 ">
            {loading ? <Skeleton /> : datas.map((datum) => <CardPost nama={datum.name_user} gambar={datum.image_url} onNavigate={() => props.navigate(`/Detail/coba`)} />)}
            <div className="g"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WithRouter(ListPosting);
