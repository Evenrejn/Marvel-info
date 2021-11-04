import s from "./comicsPage.module.css";
import useMarvelService from "../../services/MarvelService";
import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const ComicsPage = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }
        setComicsList([...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setOffset(offset + 8);
        setComicsEnded(ended);
    }

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <li key={i}>
                    <a className={s.comics} href="#">
                    <div className={s.comicsWrap}>
                        <img className={s.comicsImg} src={item.thumbnail} alt={item.title}></img>
                        <p className={s.comicsTitle}>{item.title}</p>
                        <p className={s.comicsPrice}>{item.price}</p>
                    </div>
                    </a>
                </li>
            )
        })

        return (
            <ul className={s.comicsList}>{items}</ul>
        )
    }

    const items = renderItems(comicsList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <>
            <div className={s.top}>
                <div className={s.topWrap}>
                    <p className={s.topText}>New comics every week!</p>
                    <p className={s.topText}>Stay tuned!</p>
                </div>
            </div>
            <div className={s.wrap}>
                {errorMessage}
                {spinner}
                {items}
            </div>
            <button className={s.comicsBtn}
                    disabled={newItemLoading}
                    style={{'display': comicsEnded ? 'none' : 'block'}}
                    onClick={() => onRequest(offset)}
            >
                Load more
            </button>
        </>
    )

    // return (
    //     <>
    //         <div className={s.top}>
    //             <div className={s.topWrap}>
    //                 <p className={s.topText}>New comics every week!</p>
    //                 <p className={s.topText}>Stay tuned!</p>
    //             </div>
    //         </div>
    //         <div className={s.wrap}>
    //             {/* <ul className={s.comicsList}>
    //                 <li><a className={s.comics} href="#">
    //                         <div className={s.comicsWrap}>
    //                             <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
    //                             <p className={s.comicsTitle}>Ultimate x-men 5</p>
    //                             <p className={s.comicsPrice}>9.99$</p>
    //                         </div>
    //                     </a></li>
    //                     <li><a className={s.comics} href="#">
    //                         <div className={s.comicsWrap}>
    //                             <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
    //                             <p className={s.comicsTitle}>Ultimate x-men 5</p>
    //                             <p className={s.comicsPrice}>9.99$</p>
    //                         </div>
    //                     </a></li>
    //                     <li><a className={s.comics} href="#">
    //                         <div className={s.comicsWrap}>
    //                             <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
    //                             <p className={s.comicsTitle}>Ultimate x-men 5</p>
    //                             <p className={s.comicsPrice}>9.99$</p>
    //                         </div>
    //                     </a></li>
    //                     <li><a className={s.comics} href="#">
    //                         <div className={s.comicsWrap}>
    //                             <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
    //                             <p className={s.comicsTitle}>Ultimate x-men 5</p>
    //                             <p className={s.comicsPrice}>9.99$</p>
    //                         </div>
    //                     </a></li>
    //                     <li><a className={s.comics} href="#">
    //                         <div className={s.comicsWrap}>
    //                             <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
    //                             <p className={s.comicsTitle}>Ultimate x-men 5</p>
    //                             <p className={s.comicsPrice}>9.99$</p>
    //                         </div>
    //                     </a></li>
    //                     <li><a className={s.comics} href="#">
    //                         <div className={s.comicsWrap}>
    //                             <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
    //                             <p className={s.comicsTitle}>Ultimate x-men 5</p>
    //                             <p className={s.comicsPrice}>9.99$</p>
    //                         </div>
    //                     </a></li>
    //                     <li><a className={s.comics} href="#">
    //                         <div className={s.comicsWrap}>
    //                             <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
    //                             <p className={s.comicsTitle}>Ultimate x-men 5</p>
    //                             <p className={s.comicsPrice}>9.99$</p>
    //                         </div>
    //                     </a></li>
    //                     <li><a className={s.comics} href="#">
    //                         <div className={s.comicsWrap}>
    //                             <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
    //                             <p className={s.comicsTitle}>Ultimate x-men 5</p>
    //                             <p className={s.comicsPrice}>9.99$</p>
    //                         </div>
    //                     </a></li>
    //             </ul> */}
    //         </div>
    //         <button className={s.comicsBtn}>
    //             Load more
    //         </button>
    //     </>
    // )
}

export default ComicsPage;