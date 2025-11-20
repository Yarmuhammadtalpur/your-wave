import React from "react";
import "./styles.scss";
function index() {
  return (
    <div id="on-tour-section">
      <div className="wrapper mt-4">
        <div className="sub-title">Currently on tour</div>
        <div className="row g-0 mt-3">
          {[1, 2, 3, 4, 5, 6]?.map((album, i) => (
            <div className="col-12 col-md-6 col-lg-4 mt-3" key={"album" + i}>
              <div className="band">
                <div className="date-wrapper">4 Sept</div>
                <div className="bads-info">
                  <div className="name">London</div>
                  <div className="sub-details">
                    <div className="song-name">All DayWhite lies </div>
                    <div className="time">Fri 7:00 PMㆍRoundHouse </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
