function ImagePosting(props) {
  const ImagePost = {
    width: "100%",
  };

  return (
    <div className="flex justify-center m-2" style={ImagePost}>
      <div onClick={props.onNavigate}>
        <img className="w-100" src={`https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png`} alt="" />
      </div>
    </div>
  );
}

export default ImagePosting;
