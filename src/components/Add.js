import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Add () {
  const [ nomi, setNomi ] = useState("");
  const [ turi, setTuri ] = useState("");
  const [ soni, SetSoni ] = useState("");
  const malumotlar = useSelector((state) => state);

  const HandleSubmit = (e) => {
    const ErrName = malumotlar.find(malumot => malumot.name === nomi && malumot)
    const ErrTuri = malumotlar.find(malumot => malumot.turi === turi && malumot)
    const dispatch = useDispatch();
    console.log(malumotlar);
    e.preventDefault();
    if(!nomi || !turi || !soni) {
      toast.warning("to'ldirmadingiz");
    }
    if(ErrName){
       toast.error("bu name mavjud");
    }
    if(ErrTuri) {
      toast.error("bu turi mavjud")
    }
    const timeId = new Date().getTime();
    const data = {
      id: timeId, 
      nomi,
      turi, 
      soni
    }
    dispatch({type: "ADD_MAHSULOT", payload: data})
    toast.success("muvofaqqiyatli");
  }

  return (
    <>
      <div className="container">
        <ToastContainer draggable={false}  autoClose={2000}/>
        <div className="row">
          <h1 className="display-3 text-center">Mahsulot qo'shish</h1>
          <div className="col-md-8 shadow mx-auto p-5">
            <form onSubmit={HandleSubmit} >
              <div className="form-group">
                <input 
                  className="form-control form-control-lg" 
                  type="text" placeholder="Nomi"  
                  value={nomi}  
                  onChange={e => setNomi(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input 
                  className="form-control form-control-lg my-3" 
                  type="text" 
                  placeholder="Turi" 
                  value={turi} 
                  onChange={e => setTuri(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input 
                  className="form-control form-control-lg" 
                  type="number" 
                  placeholder="Soni" 
                  value={soni} 
                  onChange={e => SetSoni(e.target.value)}
                />
              </div>
              <div className="form-group d-grid"> 
                <button type="submit" className="btn btn-dark my-3 form-control-lg"> Add Project </button>
                <Link to="/" className="form-group btn btn-danger"> Cencel </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}