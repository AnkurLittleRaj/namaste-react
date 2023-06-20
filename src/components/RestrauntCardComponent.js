const RestrauntCardComponent = (props) => {
    const {resData} = props;
    const {name,avgRating,cuisines,
      slaString} = resData?.data;
     props.key = resData.id;
     let imgVal = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ resData.data.cloudinaryImageId
    return (
      <div className="restraunt-card">
        <img
          className="restraunt-food-Image"
          alt="Food"
          src={imgVal}
        
        />
        <div className="food-Detail">
          {console.log("props",props)}
          <h3>{name}</h3>
          <h4>{avgRating}</h4>
          <h4>{cuisines.join(" ")}</h4>
          <h4>{slaString}</h4>
       
        </div>
      </div>
    );
  };
  export default RestrauntCardComponent;