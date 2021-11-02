import s from "./comicsPage.module.css";

const ComicsPage = (props) => {



    return (
        <>
            <div className={s.top}>
                <div className={s.topWrap}>
                    <p className={s.topText}>New comics every week!</p>
                    <p className={s.topText}>Stay tuned!</p>
                </div>
            </div>
            <div className={s.wrap}>
                <ul className={s.comicsList}>
                    <li><a className={s.comics} href="#">
                            <div className={s.comicsWrap}>
                                <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
                                <p className={s.comicsTitle}>Ultimate x-men 5</p>
                                <p className={s.comicsPrice}>9.99$</p>
                            </div>
                        </a></li>
                        <li><a className={s.comics} href="#">
                            <div className={s.comicsWrap}>
                                <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
                                <p className={s.comicsTitle}>Ultimate x-men 5</p>
                                <p className={s.comicsPrice}>9.99$</p>
                            </div>
                        </a></li>
                        <li><a className={s.comics} href="#">
                            <div className={s.comicsWrap}>
                                <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
                                <p className={s.comicsTitle}>Ultimate x-men 5</p>
                                <p className={s.comicsPrice}>9.99$</p>
                            </div>
                        </a></li>
                        <li><a className={s.comics} href="#">
                            <div className={s.comicsWrap}>
                                <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
                                <p className={s.comicsTitle}>Ultimate x-men 5</p>
                                <p className={s.comicsPrice}>9.99$</p>
                            </div>
                        </a></li>
                        <li><a className={s.comics} href="#">
                            <div className={s.comicsWrap}>
                                <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
                                <p className={s.comicsTitle}>Ultimate x-men 5</p>
                                <p className={s.comicsPrice}>9.99$</p>
                            </div>
                        </a></li>
                        <li><a className={s.comics} href="#">
                            <div className={s.comicsWrap}>
                                <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
                                <p className={s.comicsTitle}>Ultimate x-men 5</p>
                                <p className={s.comicsPrice}>9.99$</p>
                            </div>
                        </a></li>
                        <li><a className={s.comics} href="#">
                            <div className={s.comicsWrap}>
                                <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
                                <p className={s.comicsTitle}>Ultimate x-men 5</p>
                                <p className={s.comicsPrice}>9.99$</p>
                            </div>
                        </a></li>
                        <li><a className={s.comics} href="#">
                            <div className={s.comicsWrap}>
                                <img className={s.comicsImg} src="http://placehold.it/346x225" alt="some comics"></img>
                                <p className={s.comicsTitle}>Ultimate x-men 5</p>
                                <p className={s.comicsPrice}>9.99$</p>
                            </div>
                        </a></li>
                </ul>
            </div>
            <button className={s.comicsBtn}>
                Load more
            </button>
        </>
    )
}

export default ComicsPage;