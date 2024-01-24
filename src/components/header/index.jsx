import React from "react";
import Clock from "../clock";
import CurrentDate from "../currentDate";
import logo from "../../assets/logo.png";
import "./index.css";

export default function Header({ judulHeader, bgHeader, colorTitle }) {
  return (
    <div
      className="mt-0 shadow "
      style={{
        borderBottom: "2px solid #bcbcbc",

        background: bgHeader,
      }}
    >
      <div className=" d-flex justify-content-between align-items-center mb-3">
        <div className="align-left px-3 mt-1">
          <img
            src={logo}
            alt=""
            style={{
              width: 190,
              height: 60,
              borderRadius: "10px",
            }}
            className="ms-2"
          />
        </div>
        <div className="align-center">
          <div className="  font-header-line  fw-bold ">
            <div
              className=" mt-2  px-5 border-0   "
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,1) 55%, rgba(62,166,238,1) 100%)",
                color: colorTitle,
              }}
            >
              {judulHeader}
            </div>
          </div>
        </div>
        <div
          className="align-right rounded-3 d-flex shadow-sm mx-3  "
          style={{
            height: 30,
            width: "10%",
          }}
        >
          <span className="px-3 header-date ">{/* <CurrentDate /> */}</span>
          <span className="px-3">
            <Clock />
          </span>
        </div>
      </div>
    </div>
  );
}
