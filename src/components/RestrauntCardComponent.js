const RestrauntCardComponent = (props) => {
    const {resData} = props;
    const {name,avgRating,cuisines,
    deliveryTime} = resData;
    return (
      <div className="restraunt-card">
        <img
          className="restraunt-food-Image"
          alt="Food"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/db40cb52b0f5a2d3753356c5a88c09ce"
        />
        <div className="food-Detail">
          <h3>{name}</h3>
          <h4>{avgRating}</h4>
          <h4>{cuisines}</h4>
          <h4>{deliveryTime}</h4>
       
        </div>
      </div>
    );
  };
  export default RestrauntCardComponent;