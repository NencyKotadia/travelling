import React, { useState } from "react";
import './section_9.css'
import {userData} from './section_contant_9'
function Section_9(){
    const [data, setData] = useState(userData);
    return(
        <>
          <div className="body">
      <div className="container">
        {data.map((item, index) => {
          return (
            <>
              <div className="card">
                <div className="content">
                  <h2>{item.num}</h2>
                  <div>{item.contry}</div>
                  <img src={item.url} className="img" alt="#" />
                  <p>{item.paragra}</p> 
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
        </>
    );
}
export default Section_9;