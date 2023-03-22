import React, { useEffect, useState } from "react";
import axios from "axios";
import Laptop from "./components/Laptop";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { CircularProgress } from "@mui/material";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [toggleIncrease, setToggleIncrease] = useState(false);

  const getData = async () => {
    const response = await axios("https://demoapi.com/api/laptop");
    setLoading(false);
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    setToggleIncrease((prev) => !prev);
    toggleIncrease
      ? data.sort((a, b) => a.weight - b.weight)
      : data.sort((a, b) => b.weight - a.weight);
  };

  const filteredData = data.filter((laptop) =>
    laptop.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(search);
  return (
    <>
      <div className="searchBar">
        <label style={{display: "flex", flexDirection: "column"}}>laptop name:
        <Input
          value={search}
          placeholder={"search"}
          onInput={(e) => {
            setSearch(e.target.value);
          }}
        /></label>
        <div className="orderDiv">
          <span>order:</span>
          <Button variant="outlined" onClick={handleClick}>
            {toggleIncrease ? "weight increasing" : "weight decreasing"}
          </Button>
        </div>
      </div>

      <div className="cards-container">
        {loading ? (
          <CircularProgress />
        ) : (
          filteredData.map((laptop) => (
            <Laptop key={laptop.name} {...{ laptop }} />
          ))
        )}
      </div>
    </>
  );
};

export default App;
