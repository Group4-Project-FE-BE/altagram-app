import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { GrNext, GrPrevious } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";

const CardComent = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: `100%`,
    position: "relative",
  };

  const slideStyle = {
    width: `100%`,
    height: `100%`,
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundColor: `blue`,
    // backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const LeftArrowStyles = {
    position: `absolute`,
    top: "50%",
    transform: `translate(0, -50%)`,
    left: `32px`,
    fontSize: `45px`,
    color: "black",
    zIndex: 1,
    cursor: `pointer`,
  };

  const rightArrowStyles = {
    position: `absolute`,
    top: "50%",
    transform: `translate(0, -50%)`,
    right: `32px`,
    fontSize: `45px`,
    color: "black",
    zIndex: 1,
    cursor: `pointer`,
  };

  const postinganFoto = {
    width: "1500px",
    height: "auto",
  };

  const navPost = {
    backgroundColor: "#fdc8c0",
  };

  const close = {
    height: "2em",
    width: "auto",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={LeftArrowStyles} onClick={goToPrevious}>
        <GrPrevious />
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        <GrNext />
      </div>
      <div style={slideStyle} className="d-flex justify-content-center align-items-center">
        <div>
          <div className="row" style={slideStyle}>
            <div className="grid offset-1 col-5 bg-black p-0">
              <div className="row postinganFoto">
                <img src={`${slides[currentIndex].url}`} style={postinganFoto} alt="postingan" />
              </div>
            </div>
            <div className="grid col-5 border bg-white p-0">
              {/* <div className="d-flex align-self-end">
                
              </div> */}
              <div class="d-flex align-items-start flex-column bd-highlight mb-3 h-100">
                <div class=" bd-highlight w-100">
                  <div>
                    <div className="border-b m-0 shadow d-flex justify-content-between align-items-center" style={navPost}>
                      <div className="d-flex align-items-center m-3">
                        <div className="me-3">
                          <img className="fotoprofilcoment m-1" src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png" alt="foto profil" />
                        </div>
                        <div className="fw-bold">{slides[currentIndex].title}</div>
                      </div>
                      <Link to="/">
                        <div className="m-5 c">
                          <AiFillCloseCircle style={close} />
                        </div>
                      </Link>
                    </div>
                    <div className="mt-4 ms-2">
                      <p>Caption : oke masse</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 bd-highlight w-100">
                  <div>Komentar</div>
                  <div className="d-flex align-items-center m-3">
                    <div className="me-3">
                      <img className="fotoprofil m-1" src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png" alt="foto profil" />
                    </div>
                    <div>
                      <div className="fw-bold">{slides[currentIndex].title}</div>
                      <div> ente kadang-kang ente</div>
                    </div>
                  </div>
                </div>
                <div class="mt-auto p-2 bd-highlight w-100">
                  <textarea className="w-100 border-0 rounded" id="comment" placeholder="coment bro"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComent;
