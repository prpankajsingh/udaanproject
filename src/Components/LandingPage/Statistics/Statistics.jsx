import React, { useEffect } from "react";
import $ from "jquery";

import "./Statistics.css";

function Statistics() {
    useEffect(() => {  
        $.fn.jQuerySimpleCounter = function (options) {
            var settings = $.extend(
                {
                    start: 0,
                    end: 100,
                    easing: "swing",
                    duration: 400,
                    complete: ""
                },
                options
            );
            
            var thisElement = $(this);
            
            $({ count: settings.start }).animate(
                { count: settings.end },
                {
                    duration: settings.duration,
                    easing: settings.easing,
                    step: function () {
                        var mathCount = Math.ceil(this.count);
                        thisElement.text(mathCount);
                    },
                    complete: settings.complete
                }
            );
        };
        
        $("#number1").jQuerySimpleCounter({ end: 4000, duration: 3000 });
        $("#number2").jQuerySimpleCounter({ end: 50, duration: 3000 });
        $("#number3").jQuerySimpleCounter({ end: 15, duration: 2000 });
        $("#number4").jQuerySimpleCounter({ end: 8, duration: 2500 });
    }, [])

    return (
    <>
        <div className="sectiontitle">
            <p className="event_title">Statistics</p>
        </div>

        <div id="projectFacts" className="sectionClass">
            <div className="fullWidth eight columns">
                <div className="projectFactsWrap ">
                    <div className="item wow fadeInUpBig animated animated" data-number="12" style={{visibility: "visible"}}>
                        <i class="fa fa-file"></i>
                        <p id="number1" className="number">4000</p>
                        <span></span>
                        <p>Page Translated</p>
                    </div>
                    <div className="item wow fadeInUpBig animated animated" data-number="55" style={{visibility: "visible"}}>
                        <i className="fa fa-smile-o"></i>
                        <p id="number2" className="number">50</p>
                        <span></span>
                        <p>Active Translators</p>
                    </div>
                    <div className="item wow fadeInUpBig animated animated" data-number="359" style={{visibility: "visible"}}>
                        <i class="fa fa-book"></i>
                        <p id="number3" className="number">15</p>
                        <span></span>
                        <p>Books Translated</p>
                    </div>
                    <div className="item wow fadeInUpBig animated animated" data-number="246" style={{visibility: "visible"}}>
                        <i class="fa fa-sitemap"></i>
                        <p id="number4" className="number">8</p>
                        <span></span>
                        <p>Org Users</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="Users" className="inner">
            <div className="sectiontitle">
                <p className="event_title">Key Users</p>
            </div>

            <div style={{padding: "0%"}}>
                <div className="inner">
                    <div className="row">
                        <div className="col">
                            <div className="card" style={{backgroundColor: "rgba(242,244,248,.92)"}}>
                                <div className="card-body">
                                    <a href="aicte-india.org" target="_blank">
                                        <img width="250px" src="https://raw.githubusercontent.com/prpankajsingh/udaanproject/main/assets/img/clients/aicte.png"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card" style={{backgroundColor: "rgba(242,244,248,.92)"}}>
                                <div className="card-body">
                                    <a href="https://www.bankofbaroda.in/" target="_blank">
                                        <img width="250px" height="50px" src="https://raw.githubusercontent.com/prpankajsingh/udaanproject/main/assets/img/clients/bob.jpg" /> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="card" style={{backgroundColor: "rgba(242,244,248,.92)"}}>
                                <div className="card-body">
                                    <a href="https://www.pepstudy.com/" target="_blank">
                                        <img width="250px" height="50px" src="https://raw.githubusercontent.com/prpankajsingh/udaanproject/main/assets/img/clients/pepstudy.png" /> 
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card" style={{backgroundColor: "rgba(242,244,248,.92)"}}>
                                <div className="card-body">
                                    <a href="http://bsmbharat.org/" target="_blank">
                                        <img height="50px" src="https://raw.githubusercontent.com/prpankajsingh/udaanproject/main/assets/img/clients/bsm.png" /> 
                                    </a>
                                    Bharatiya Shikshan Mandal
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Statistics;
