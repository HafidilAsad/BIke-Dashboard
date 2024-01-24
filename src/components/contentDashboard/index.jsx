import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import ReactSpeedometer from "react-d3-speedometer";
import gambarUser from "../../assets/gambarUser.png";
import SimpleMap from "../simpleMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const ContentDashboard = () => {
  const [speed, setSpeed] = useState(0);
  const mapRef = useRef(null);
  const latitude = 51.505;
  const longitude = -0.09;
  // const [location, setLocation] = useState({ lat: 0, lon: 0 });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("YOUR_ESP32_API_ENDPOINT");
  //       setLocation({ lat: response.data.lat, lon: response.data.lon });
  //     } catch (error) {
  //       console.error("Error fetching location:", error);
  //     }
  //   };

  //   const interval = setInterval(fetchData, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <div className="container-fluid mt-2 ">
      <div className="row fs-4 fw-semibold">
        <div className="col">
          <div
            className="card shadow"
            style={{ borderRadius: "15px", borderBottom: "10px solid #bcbcbc" }}
          >
            <div className="card-body text-center">
              <div style={{ borderBottom: "4px solid #bcbcbc" }}>
                SPEED (km/h)
              </div>

              <div className="mt-3 " style={{ maxHeight: "8em" }}>
                <ReactSpeedometer
                  maxValue={500}
                  value={473}
                  needleColor="red"
                  startColor="green"
                  segments={10}
                  endColor="blue"
                  textColor="BLACK"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card shadow"
            style={{ borderRadius: "15px", borderBottom: "10px solid #bcbcbc" }}
          >
            <div className="card-body text-center">
              <div style={{ borderBottom: "4px solid #bcbcbc" }}>
                CADENCE (Rpm)
              </div>

              <div
                className="mt-3 "
                style={{ maxHeight: "8em", minHeight: "8em" }}
              >
                <div style={{ fontSize: "5em" }} className="text-muted">
                  178 <span className="fs-3 fw-bold"> Rpm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card shadow"
            style={{ borderRadius: "15px", borderBottom: "10px solid #bcbcbc" }}
          >
            <div className="card-body text-center">
              <div style={{ borderBottom: "4px solid #bcbcbc" }}>
                HEART BEAT (bpm)
              </div>

              <div
                className="mt-3 "
                style={{ maxHeight: "8em", minHeight: "8em" }}
              >
                <div style={{ fontSize: "5em" }} className="text-muted">
                  73.2 <span className="fs-3 fw-bold"> bpm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card shadow"
            style={{ borderRadius: "15px", borderBottom: "10px solid #bcbcbc" }}
          >
            <div className="card-body text-center">
              <div style={{ borderBottom: "4px solid #bcbcbc" }}>
                KEMIRINGAN (%)
              </div>

              <div
                className="mt-3 "
                style={{ maxHeight: "8em", minHeight: "8em" }}
              >
                <div style={{ fontSize: "5em" }} className="text-muted">
                  11.9 <span className="fs-3 fw-bold"> %</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-8">
          <div className="card">
            <div className="card-header fs-4 fw-semibold text-muted text-center">
              LOCATION
            </div>
            <div className="card-body">
              <SimpleMap />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ minHeight: "35em" }}>
            <div className="card-header fs-4 fw-semibold text-muted text-center">
              INFO VALIDATION
            </div>
            <div className="card-body text-center">
              <div className="row">
                <div className="col">
                  <div
                    className="card shadow fs-5 fw-semibold"
                    style={{
                      borderRadius: "15px",
                      borderBottom: "10px solid #bcbcbc",
                    }}
                  >
                    <div className="card-body text-center">
                      <div style={{ borderBottom: "4px solid #bcbcbc" }}>
                        INFORMASI PESERTA
                      </div>

                      <div
                        className="mt-3 "
                        style={{ maxHeight: "8em", minHeight: "8em" }}
                      >
                        <div className="row align-left">
                          <div className="col">
                            <img src={gambarUser} width={150} alt="" />
                          </div>
                          <div className="col mt-4  ">
                            <div>NAMA SUPRIYADI</div>
                            <div>18 Th</div>
                            <div>JAKARTA</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fs-4 fw-semibold text-muted">
                <div
                  className="card shadow fs-5 fw-semibold"
                  style={{
                    borderRadius: "15px",
                    borderBottom: "10px solid #bcbcbc",
                  }}
                >
                  <div className="card-body text-center">
                    <div style={{ borderBottom: "4px solid #bcbcbc" }}>
                      INFORMASI VALIDASI
                    </div>

                    <div
                      className="mt-0 "
                      style={{ maxHeight: "8em", minHeight: "8em" }}
                    >
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="me-2 mt-4 mb-4"
                        style={{ fontSize: "5em", color: "#55ca16" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDashboard;
