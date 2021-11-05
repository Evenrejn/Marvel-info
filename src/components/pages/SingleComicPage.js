import { Link, useParams } from "react-router-dom";
import s from "./singleComicPage.module.css";
import { useState, useEffect } from 'react';
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const SingleComicPage = () => {
    const {comicId} = useParams();
    const [comic, setComic] = useState(null);
    const {loading, error, getComic, clearError} = useMarvelService();

    useEffect(() => {
        updateComic();
      }, [comicId]);
    
    const updateComic = () => {   
        clearError();
        getComic(comicId)
            .then(onComicLoaded);
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({comic}) => {
    const {title, description, pageCount, thumbnail, language, price} = comic;

    return (
        <div className={s.wrap}>
            <div>
                <img className={s.comicImg} src={thumbnail} alt={title}></img>
                <div className={s.descWrap}>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.text}>{description}</p>
                    <p className={s.pages}>{pageCount}</p>
                    <p className={s.lang}>Language: {language}</p>
                    <h3 className={s.price}>{price}</h3>
                </div>
            </div>
            <Link to="/comics" className={s.link}>Back to all</Link>
        </div>
    )
}

export default SingleComicPage;
