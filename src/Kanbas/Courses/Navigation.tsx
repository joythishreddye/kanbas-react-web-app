import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {useLocation} from "react-router";

export default function CoursesNavigation() {
    const {cid} = useParams();
    const location = useLocation();
    const links = [
        {name: "Home", path: "Home"},
        {name: "Modules", path: "Modules"},
        {name: "Piazza", path: "Piazza"},
        {name: "Zoom", path: "Zoom"},
        {name: "Assignments", path: "Assignments"},
        {name: "Quizzes", path: "Quizzes"},
        {name: "People", path: "People"}
    ];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0"
             style={{marginRight: '30px'}}>
            {links.map(link => (
                <Link
                    key={link.path} to={`/Kanbas/Courses/${cid}/${link.path}`}
                    className={`list-group-item border border-0 ${location.pathname.includes(link.path) ? 'active' : ''}`}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
}
