import { Button } from "@mui/material";
import { useState } from "react";


const Laptop = ({ laptop }) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
    <div>

    <div 
    style={{ boxShadow: "rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px"}}
    className="laptopCards">
      <h1 className="cardTitle"  >{laptop.name}</h1>
      <Button variant="outlined"  onClick={handleClick}>
        {showMore ? "Show less" : "Show more"}
      </Button>
      
      
      {showMore && (
        <div >
          <p>Brand: {laptop.brand}</p>
          <p>Weight: {laptop.weight}</p>
        </div>
      )}
</div>
      </div>
      
    </>
  );
};

export default Laptop;
