import React, { useState } from "react";
import { FaAccusoft } from "react-icons/fa";
import { TiUserOutline } from "react-icons/ti";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
export default function App() 
{
  const [click,setClick]=useState(false);
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>
              <FaAccusoft  className="m-2" />
              EDUVERSE
            </h1>
          </div>
          <div className="profile ">
          <Link to={`login`}> <button className="ss p-1">LOG IN</button></Link>
          <Link to={`register`}> <button className="ss p-1">SIGN UP</button></Link>
            <button className="ss p-1">
              <TiUserOutline />
            </button>
          </div>
        </div>
      </section>
      <section className="header">
        <nav className="flexSB">
          <ul className={click?"mobile-nav":"flexSB"}
          onClick={()=>setClick(false)}
          style={{ listStyle: "none" }}>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/courses"}>COURSES</Link>
            </li>
            <li>
              <Link to={"/team"}>TEAM</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
          <div className="search d-flex pt-4 ">
            <input 
            style={{color:"white"}}
            type="text" placeholder="Search Courses"  /> 
            <div className="me-2 "
            style={{height:"40px",padding:"7px"}}><CiSearch  className="fs-4 mb-1" /></div>
            
          </div>
          <button className="toggle" onClick={()=>setClick(!click)}>
          {
            click?<IoMdClose />:<FaBars />
          }
          </button>
        </nav>
      </section>
    </>
  );
}
