import React from 'react';
import './section_5.css';

function section_5(){
    const con_1 ="LORD IS SUFFICIENT FOR ALL OF OUR NEEDS";
    const con_2 ="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    const con_3 ="Sermon from: Felix Gonner"

    return(
        <div className='section_5'>
            <div className="sec_5_1"></div>
            <div className="sec_5_2">
                <div className="con_1">{con_1}</div>
                <div className="con">{con_3}</div>
                <div className="cont">Categories: <span className='con_4_1'> God, Pray</span></div>
                <div className="con_2">{con_2}</div>
                <div className="btn_div">
                <button className='btn_1'>Watch Sermons</button>
                <button className='btn_2'>Download Sermons</button>
                </div>
            </div>
        </div>
    );
}
export default section_5;