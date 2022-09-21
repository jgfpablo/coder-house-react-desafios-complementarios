import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import category from "../../categories";
import "../../css/NavBar/Nav.css";

export const Nav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            category.then((res) => setCategories(res));
        }, 1000);
    }, []);

    if (categories) {
        return (
            <div className="nav">
                <div className="navegacion">
                    <ul className="ul">
                        <li className="nav-li">
                            <NavLink
                                to="/"
                                className={(navData) =>
                                    navData.isActive ? "active" : ""
                                }
                            >
                                Inicio
                            </NavLink>
                        </li>

                        {categories.map((category, index) => {
                            return (
                                <li className="nav-li" key={index}>
                                    <NavLink
                                        className={(navData) =>
                                            navData.isActive ? "active" : ""
                                        }
                                        key={index}
                                        to={"/category/" + category.categoria}
                                    >
                                        {category.categoria}
                                    </NavLink>
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
