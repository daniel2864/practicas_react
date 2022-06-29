import { lazy, LazyExoticComponent } from "react";
/*import {
    LazyPage1,
    LazyPage2,
    LazyPage3
} from "../pages";*/

type JSXComponent = () => JSX.Element;

interface Router {
    path: string,
    to: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const Lazy1 = lazy(() => import('../pages/lazyPage1'));
const Lazy2 = lazy(() => import('../pages/lazyPage2'));
const Lazy3 = lazy(() => import('../pages/lazyPage3'));

export const routes: Router[] = [
    {
        path: '/lazy1',
        to: 'lazy1',
        Component: Lazy1,
        name: 'Lazy 1'

    },
    {
        path: '/lazy2',
        to: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2'

    }, {
        path: '/lazy3',
        to: 'lazy3',
        Component: Lazy3,
        name: 'Lazy 3'

    }
]
