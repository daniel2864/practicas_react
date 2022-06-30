import { lazy, LazyExoticComponent } from "react";
import { noLazy } from "../pages/noLazy";
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

const LazyLayout = lazy(() => import('../layout/LazyLayout'));
//const Lazy2 = lazy(() => import('../pages/lazyPage2'));

export const routes: Router[] = [
    {
        path: '/lazy-layout/*',
        to: '/lazy-layout/',
        Component: LazyLayout,
        name: 'Lazy Layout'

    },
    {
        path: '/no-lazy',
        to: 'no-lazy',
        Component: noLazy,
        name: 'No Lazy'

    }
]
