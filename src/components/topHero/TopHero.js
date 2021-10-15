import s from "./topHero.module.css";

export const TopHero = () => {
    return (
        <div className={s.topHero}>
            <img className={s.topImg} src="#" alt="hero"></img>
            <div className={s.topCard}>
            <h3 className={s.topCardTitle}>Thor</h3>
            <p className={s.topCardText}>some desc</p>
            <div className={s.topBtnWrap}>
                <button className={s.topInnerBtn}>Homepage</button>
                <button className={s.topBtn}>Wiki</button>
            </div>
            </div>
        </div>
    )
}