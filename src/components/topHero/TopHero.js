import s from "./topHero.module.css";
import { useState, useEffect } from 'react';
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";


export const TopHero = () => {

    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId);
        }
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    }

    const onCharLoading = () => {
        setLoading(true);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        onCharLoading();
        marvelService
            .getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }


    const {name, desc, thumbnail, homepage, wiki} = char;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (
    <>
        <div className={s.topHero}>
        {errorMessage}
        {loading ? <Spinner /> : <>
            <img className={s.topImg} src={thumbnail} alt="hero"></img>
            <div className={s.topCard}>
                <h3 className={s.topCardTitle}>{name}</h3>
                <p className={s.topCardText}>{desc.length > 200 ? `${desc.slice(0, 200)}...` : desc || "No description"}</p>
                <div className={s.topBtnWrap}>
                    <a href={homepage} className={s.topInnerBtn}>Homepage</a>
                    <a href={wiki} className={s.topBtn}>Wiki</a>
                </div>
            </div>
        </>}
        </div>
            <div className={s.random}>
                <div className={s.randomWrap}>
                    <p className={s.randomText}>Random character for today!<br/> Do you want to get to know him better?</p>
                </div>
                <div className={s.randomWrapper}>
                    <p className={s.randomText}>Or choose another one</p>
                    <button onClick={this.updateChar} className={s.randomBtn}>Try it</button>
                </div>
        </div>
    </>
    )
    
}
