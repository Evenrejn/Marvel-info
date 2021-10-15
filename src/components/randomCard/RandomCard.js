import s from "./randomCard.module.css";

export const RandomCard = () => {
    return (
        <div className={s.random}>
          <div className={s.randomWrap}>
            <p className={s.randomText}>Random character for today!<br/> Do you want to get to know him better?</p>
          </div>
          <div className={s.randomWrapper}>
            <p className={s.randomText}>Or choose another one</p>
            <button className={s.randomBtn}>Try it</button>
          </div>
        </div>
    )
}