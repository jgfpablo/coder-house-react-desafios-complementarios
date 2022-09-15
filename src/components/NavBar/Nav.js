import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import category from "../../categories";
import "../../css/NavBar/Nav.css";

export const Nav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            category.then((res) => setCategories(res));
        }, 1000);
    }, []);
    console.log(categories);

    if (categories) {
        return (
            <div className="nav">
                <div className="navegacion">
                    <ul className="ul">
                        <li className="nav-li">
                            <Link to="/">Inicio</Link>
                        </li>

                        {categories.map((category, index) => {
                            return (
                                <li className="nav-li" key={index}>
                                    <Link
                                        key={index}
                                        to={"/category/" + category.categoria}
                                    >
                                        {category.categoria}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
};

export default Nav;
