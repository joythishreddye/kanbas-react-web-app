import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (12)</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img alt="reactjs" src="/images/reactjs.jpg" width={200}/>
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1235/Home">
                        <img alt="PDP" src="/images/pdp.jpg" width={200}/>
                        <div>
                            <h5>
                                CS1235 Programming Design Paradigm
                            </h5>
                            <p className="wd-dashboard-course-title">
                                PDP
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1236/Home">
                        <img alt="DBMS" src="/images/dbms.jpg" width={200}/>
                        <div>
                            <h5>CS1236 Database Management Systems</h5>
                            <p className="wd-dashboard-course-title">DBMS</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1237/Home">
                        <img alt="algo" src="/images/algo.jpg" width={200}/>
                        <div>
                            <h5>CS1237 Algorithms</h5>
                            <p className="wd-dashboard-course-title">Algo</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1238/Home">
                        <img alt="FAI" src="/images/fai.jpg" width={200}/>
                        <div>
                            <h5>CS1238 Foundation of Artificial Intelligence</h5>
                            <p className="wd-dashboard-course-title">FAI</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1238/Home">
                        <img alt="ML" src="/images/ml.jpg" width={200}/>
                        <div>
                            <h5>CS1239 Machine Learning</h5>
                            <p className="wd-dashboard-course-title">ML</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;