import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages/';

export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout page</h1>


            <ul>
                <li>
                    <NavLink
                        to='lazy-page1'
                        end
                        className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage 1</NavLink>
                </li>
                <li>
                    <NavLink
                        to='lazy-page2'
                        end
                        className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage 2</NavLink>
                </li>
                <li >
                    <NavLink
                        to='lazy-page3'
                        end
                        className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage 3</NavLink>
                </li>

            </ul>
            <Routes>
                <Route path='lazy-page1' element={<LazyPage1 />}></Route>
                <Route path='lazy-page2' element={<LazyPage2 />}></Route>
                <Route path='lazy-page3' element={<LazyPage3 />}></Route>
                <Route path='*' element={<Navigate replace to='lazy-page1' />}></Route>
            </Routes>
        </div>
    )
}


export default LazyLayout;