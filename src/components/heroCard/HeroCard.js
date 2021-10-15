import s from "./heroCard.module.css";
import ComicsList from "../comicsList/ComicsList";

export const HeroCard = () => {
    return (
        <section className={s.about}>
          <div className={s.aboutTop}>
            <img className={s.aboutImg} src="#" alt="hero"></img>
            <div className={s.aboutTopWrap}>
              <p className={s.aboutTitle}>Loki</p>
              <button className={s.aboutInnerLink}>Homepage</button>
              <button className={s.aboutLink}>Wiki</button>
            </div>
          </div>
          <p className={s.aboutDesc}>Some desc</p>
          <p className={s.aboutComics}>Comics:</p>
          <ComicsList />
      </section>
    )
}


