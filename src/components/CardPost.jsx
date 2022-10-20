function CardPost(props) {
  const ImagePost = {
    padding: "0.2em",
    backgroundColor: "#FDC8C0",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    border: "solid  #6768AB",
    boxShadow: "rgb(86, 86, 88) 3px 3px 2px 2px",
  };

  return (
    <div className="flex h-full w-full justify-center rounded-5 m-2" style={ImagePost}>
      <div onClick={props.onNavigate}>
        <div className="d-flex align-items-center p-2">
          <div className="me-3">
            <img className="fotoprofil m-1" src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png" alt="foto rpofil" />
          </div>
          <div>Castie</div>
        </div>

        <img className="rounded-5 w-100" src={`https://www.99.co/blog/indonesia/wp-content/uploads/2022/08/Gambar-Masjid-Sederhana-1.jpg`} alt="" />
      </div>
    </div>
  );
}

export default CardPost;
