import React from "react";
import "./nav_home.css";
function nav_home() {
  let watch ="Watch Over Latest Sermons";
  const content_1 = "LOVING GOD, LOVING OTHERS,";
  const content_2 ="SERVING GOD WITH ALL YOUR";
  const content_3 ="HEART";
  const content_4 = "Submit your presence to the creator of the universe";
  return (
    <div className="nav_home">
      <div className="nav_home_sub">
        <div className="navigation">
          <div className="nav_logo">VINAYRED</div>
          <div className="nav_manu">
            <div className="manu">HOME</div>
            <div className="manu">ABOUT</div>
            <div className="manu">MINISTRIES</div>
            <div className="manu">SERMONS</div>
            <div className="manu">EVENT</div>
            <div className="manu">BLOG</div>
            <div className="manu">CONTACT</div>
          </div>
        </div>
        <div className="content">
          <div className="round"></div>
          <div className="watch">{watch}</div>
          <div className="content_1">{content_1}</div>
          <div className="content_2">{content_2}</div>
          <div className="content_3">{content_3}</div>
          <div className="content_4">{content_4}</div>
        </div>
      </div>
    </div>
  );
}
export default nav_home;
