import React from "react";
import { Link } from "react-router-dom";
export default function Read() {
  return(
    <>
      <div className="container">
        <div className="d-flex justify-content-end mt-2">
          <Link to="/add" ><button className="btn btn-success"> Add project</button></Link>
        </div>
        <div className="mahsulotlar">
          <h1>mahsulotlar</h1>
        </div>
      </div>
    </>
  )
}