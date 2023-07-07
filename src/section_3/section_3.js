import React from 'react';
import './section_3.css';

function section_3(){
    const con_1 ="WE ARE CHURCH THAT BELIEVES IN JESUS CHRIST";
    const con_2 ="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. A small river named Duden flows by their place and supplies it with the necessary regelialia."
    return(
        <div className='section_3'>
            <div className="sec_3_1"></div>
            <div className="sec_3_2">
                <div className="con_1">{con_1}</div>
                <div className="con_2">{con_2}</div>
                <div className="con_3">
                    <div className="con_sub_3_1">70,000</div>
                    <div className="con_sub_3_1">1,000</div>
                    <div className="con_sub_3_1">100,000</div>
                    <div className="con_sub_3_1">100</div>
                </div>
                <div className="con_4">
                    <div className="con_sub_3_2">Members</div>
                    <div className="con_sub_3_2">Pastors</div>
                    <div className="con_sub_3_2">Donation</div>
                    <div className="con_sub_3_2">Churches</div>
                </div>
            </div>
        </div>
    );
}
export default section_3;