import React from "react";
import { Link, useParams } from "react-router-dom";
export default function Edit () {
  const {id} = useParams();
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="display-3 text-center">Mahsulotni tahrirlash {id} </h1>
          <div className="col-md-8 shadow mx-auto p-5">
            <form>
              <div className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Nomi" />
              </div>
              <div className="form-group">
                <input className="form-control form-control-lg my-3" type="text" placeholder="Turi" />
              </div>
              <div className="form-group">
                <input className="form-control form-control-lg" type="number" placeholder="Soni" />
              </div>
              <div className="input-group mt-3 d-flex justify-content-between"> 
                <input type="submit" value="Mahsulotni yangilash" className="btn btn-dark "/>
                <Link to="/" className="form-group btn btn-danger"> Cencel </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}