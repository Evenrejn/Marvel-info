import s from "./comicsList.module.css";

const ComicsList = () => {
    return (
        <ul className={s.aboutComicsLists}>
          <li className={s.aboutComicsListsItem}>Film 1983 #50</li>
          <li className={s.aboutComicsListsItem}>Film @2</li>
          <li className={s.aboutComicsListsItem}>Some film</li>
        </ul>
    )
}

export default ComicsList;