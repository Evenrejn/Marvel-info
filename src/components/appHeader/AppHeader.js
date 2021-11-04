import s from "./appHeader.module.css";
import {Link} from 'react-router-dom';

export const AppHeader = () => {
    return (
        <header className={s.header}>
            <Link to="/">
                <h3 className={s.headerTitle}>
                    <span className={s.headerTitleMain}>Marvel </span> 
                information portal</h3>
            </Link>
            <h3 className={s.headerBreadcrumbs}>
                <Link to="/"><a className={s.headerBreadcrumbsMain}>Characters </a></Link>
                <Link to="/comics"><a className={s.headerBreadcrumbsMain}>/ Comics </a></Link>
                {/* <span className={s.headerBreadcrumbsMain}>Characters </span> */}
            / Comics</h3>
        </header>
    )
}