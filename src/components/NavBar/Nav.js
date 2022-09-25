import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/NavBar/Nav.css";
import category from "../../categories";

const Nav = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        setTimeout(() => {
            category.then((res) => setCategories(res));
        }, 1000);
    }, []);

    return (
        <div className="Nav">
            <ul className="nav-ul">
                <li className="nav-li">
                    <NavLink to="/">Inicio</NavLink>
                </li>

                {categories?.map((categor, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={"/category/" + categor.categoria}>
                                {categor.categoria}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Nav;
