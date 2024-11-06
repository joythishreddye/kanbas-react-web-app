import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useLocation} from "react-router";

export default function AccountNavigation() {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const location = useLocation();
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0"
             style={{marginRight: '30px'}}>
            {links.map(link => (
                <Link
                    key={link}
                    to={`/Kanbas/Account/${link}`}
                    className={`list-group-item border border-0 ${location.pathname.includes(link) ? 'active' : 'text-danger'}`}
                >
                    {link}
                </Link>
            ))}
        </div>
    );
}
