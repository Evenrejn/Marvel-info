import s from "./topHero.module.css";
import { useState, useEffect } from 'react';
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const TopHero = () => {

    const [char, setChar] = useState(null);
    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId);
        }
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    //const {name, desc, thumbnail, homepage, wiki} = char;

    return (
    <>
        <div className={s.topHero}>
        {errorMessage}
        {spinner}
        {!(loading || error || !char) ? <>
            <img className={s.topImg} src={char.thumbnail} alt="hero"></img>
            <div className={s.topCard}>
                <h3 className={s.topCardTitle}>{char.name}</h3>
                <p className={s.topCardText}>{char.desc.length > 200 ? `${char.desc.slice(0, 200)}...` : char.desc || "No description"}</p>
                <div className={s.topBtnWrap}>
                    <a href={char.homepage} className={s.topInnerBtn}>Homepage</a>
                    <a href={char.wiki} className={s.topBtn}>Wiki</a>
                </div>
            </div>
            </> : null}
        </div>
            <div className={s.random}>
                <div className={s.randomWrap}>
                    <p className={s.randomText}>Random character for today!<br/> Do you want to get to know him better?</p>
                </div>
                <div className={s.randomWrapper}>
                    <p className={s.randomText}>Or choose another one</p>
                    <button onClick={updateChar} className={s.randomBtn}>Try it</button>
                </div>
            </div>
    </>
    )
    
}

export default TopHero;