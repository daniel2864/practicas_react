import { Suspense } from "react";
import {
    BrowserRouter as Router, NavLink, Route, Routes
} from "react-router-dom";
import { LazyPage1 } from "../01-lazyload/pages";
import { routes } from "../01-lazyload/router/routes";
import logo from '../logo.svg';




export const Navigation = () => {
    return (

        <Suspense fallback={<span>Cargando...</span>}>

            <Router>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React" />

                        <ul>
                            {
                                routes.map(({ path, name }) => (

                                    <li key={path}>
                                        <NavLink
                                            to={path}
                                            end
                                            className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                    </li>
                                ))
                            }


                        </ul>
                    </nav>

                    <Routes>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))}

                        <Route path="*" element={<LazyPage1 />} />

                    </Routes>



                </div>
            </Router>
        </Suspense>

    )

}