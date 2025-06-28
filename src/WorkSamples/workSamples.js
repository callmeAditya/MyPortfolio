import React from "react";
import './workSamples.scss'

const WorkSamples = () => {

    return (
        <>
            <section className={"ws_container"} id="ws">
                <h2 className={"ws_title"}>WORK SAMPLES</h2>
                <div className="row wsItems">
                    <div className="col-lg-4">
                        <a target="_blank" href="https://scale-cds-public-us-west-2.s3.amazonaws.com/63fe4e654667d0a6f128105c/iCtN-aemxZob3ph">

                        <div className="wsItem ">

                            <h3>Webdev Quiz</h3>
                            <p>
                                Test your web development skills with an interactive quiz!
                            </p>
                        </div>
                        </a>

                    </div>
                    <div className="col-lg-4">
                        <a target="_blank" href="https://scale-cds-public-us-west-2.s3.amazonaws.com/63fe4e654667d0a6f128105c/6AfdumUL962ISo7">

                        <div className="wsItem">

                            <h3>FreshMart</h3>
                            <p>
                                Fresh groceries at your doorstep delivered in quick time.
                            </p>
                        </div>
                        </a>

                    </div>
                    <div className="col-lg-4">
                          <a target="_blank" href="https://scale-cds-public-us-west-2.s3.amazonaws.com/63fe4e654667d0a6f128105c/3uA0AZUd86lCCl9">

                        <div className="wsItem ">

                            <h3>PowerGrid Dashboard</h3>
                            <p>
                                Interactive dashboard to visualize power consumption and real-time energt monitoring.
                            </p>
                        </div>
                          </a>

                    </div>
                </div>

                <div style={{marginTop:'30px'}} className="row wsItems">
                    
                    <div className="col-lg-4">
                        <a target="_blank" href="https://scale-cds-public-us-west-2.s3.amazonaws.com/63fe4e654667d0a6f128105c/oJdDFBkzItDtZli">

                            <div className="wsItem">

                                <h3>Sales Analytics</h3>
                                <p>
                            Comprehensive overview of data analysis through interactive visualization.
                                </p>
                            </div>
                        </a>

                    </div>
                    <div className="col-lg-4">
                        <a target="_blank" href="https://scale-cds-public-us-west-2.s3.amazonaws.com/63fe4e654667d0a6f128105c/1iCySKOVFi9Ojhp">

                            <div className="wsItem ">

                                <h3>Math Quiz</h3>
                                <p>
                                    Sharpen your maths skills by using interactive quiz and stay ahead.
                                </p>
                            </div>
                        </a>

                    </div>
                </div>
                

            </section>
        </>
    )
}

export default WorkSamples;