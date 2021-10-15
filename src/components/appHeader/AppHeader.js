import s from "./appHeader.module.css";

export const AppHeader = () => {
    return (
        <header className={s.header}>
            <h3 className={s.headerTitle}><span className={s.headerTitleMain}>Marvel</span> information portal</h3>
            <h3 className={s.headerBreadcrumbs}><span className={s.headerBreadcrumbsMain}>Characters </span> / Comics</h3>
        </header>
    )
}