import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (12)</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{width: "290px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img alt="reactjs" src="/images/reactjs.jpg" width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "290px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1235/Home">
                                <img alt="PDP" src="/images/pdp.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1235 PDP
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Programmer
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "290px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1236/Home">
                                <img alt="DBMS" src="/images/dbms.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1236 DBMS</h5>
                                    <p className="wd-dashboard-course-title  card-text">Data
                                        Analyst</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "290px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1237/Home">
                                <img alt="algo" src="/images/algo.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1237 Algorithms</h5>
                                    <p className="wd-dashboard-course-title card-text">Solution
                                        Architect</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "290px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1238/Home">
                                <img alt="FAI" src="/images/fai.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1238 AI</h5>
                                    <p className="wd-dashboard-course-title card-text">AI
                                        Scientist</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "290px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1239/Home">
                                <img alt="ML" src="/images/ml.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1239 ML</h5>
                                    <p className="wd-dashboard-course-title card-text">ML
                                        Engineer</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "290px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1240/Home">
                                <img alt="ML" src="/images/cs.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1240 Networks</h5>
                                    <p className="wd-dashboard-course-title card-text">Networking
                                        Engineer</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}