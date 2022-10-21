function ImagePosting(props) {
  const ImagePost = {
    width: "100%",
  };

  return (
    <div className="flex justify-center m-2" style={ImagePost}>
      <div onClick={props.onNavigate}>
        <img className="w-100" src={`https://pawmaw.com/pawmaw/img/blog-img/1566853305-Stressed-Cat.jpg`} alt="" />
      </div>
    </div>
  );
}

export default ImagePosting;
