import React from "react";
import { useEffect } from "react";

import CardComent from "../components/CardComent";

import { WithRouter } from "utils/Navigation";

const PageComent = (props) => {
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const { id_post } = props.params;
  }

  const slides = [
    { url: "https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png", title: "Pretti" },
    { url: "http://pintarmewarnai.com/wp-content/uploads/2019/09/Gambar-Mewarnai-Minion-5.jpg", title: "Alexa" },
    { url: "https://www.99.co/blog/indonesia/wp-content/uploads/2022/08/Gambar-Masjid-Sederhana-1.jpg", title: "John" },
    { url: "https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg", title: "Rey" },
    { url: "https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg", title: "Jess" },
  ];

  const containerStyles = {
    width: `100em`,
    height: `50em`,
    margin: `0 auto`,
  };

  return (
    <div>
      <div style={containerStyles}>
        <CardComent slides={slides} />
      </div>
    </div>
  );
};

export default WithRouter(PageComent);
