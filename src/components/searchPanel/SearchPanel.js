import s from "./searchPanel.module.css";

export const SearchPanel = () => {
    return (
        <div className={s.search}>
            <p className={s.searchTitle}>Or find a character by name:</p>
            <input className={s.searchInput} type="text" placeholder="Enter name" />
            <button className={s.searchBtn}>Find</button>
        </div>
    )
}