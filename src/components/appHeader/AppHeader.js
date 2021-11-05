import s from "./appHeader.module.css";
import {Link, NavLink} from 'react-router-dom';

export const AppHeader = () => {
    return (
        <header className={s.header}>
            <Link to="/">
                <h3 className={s.headerTitle}>
                    <span className={s.headerTitleMain}>Marvel </span> 
                information portal</h3>
            </Link>
            <h3 className={s.headerBreadcrumbs}>
                <NavLink exact activeStyle={{'color': '#9f0013'}} to="/"><a className={s.headerBreadcrumbsMain}>Characters </a></NavLink>
                <NavLink activeStyle={{'color': '#9f0013'}} to="/comics"><a className={s.headerBreadcrumbsMain}>/ Comics </a></NavLink>
            </h3>
        </header>
    )
}