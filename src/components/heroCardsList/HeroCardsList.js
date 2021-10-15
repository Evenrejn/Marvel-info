import s from "./heroCardsList.module.css";
import { TargetCard } from "../targetCard/TargetCard";

export const HeroCardsList = () => {
    return (
        <section className={s.cardsList}>
          <div className={s.cardsWrap}>
            <TargetCard />
            <TargetCard />
            <TargetCard />
            <TargetCard />
          </div>
          <button className={s.cardsListBtn}>Load more</button>
        </section>
    )
}