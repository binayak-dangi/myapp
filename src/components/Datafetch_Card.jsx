import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Datafetch_Card = () => {
  const [fetch, setFetch] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setFetch(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {fetch &&
        fetch.map((item, i) => {
          return (
            <>
              <div key={i} className="conatiner m-5">
                <div className="row">
                  <div className="col-md-4">
                    <div  className="card">
                      <div class="card-body">
                        <h1>{item.title}</h1>
                        <h2>${item.price}</h2>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Datafetch_Card;
