import s from "./heroCardsList.module.css";
import useMarvelService from "../../services/MarvelService";
import { useState, useEffect, useRef } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import PropTypes from 'prop-types';

const HeroCardsList = (props) => {

  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const {loading, error, getAllCharacters} = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, [])

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);

    getAllCharacters(offset)
      .then(onCharListLoaded);
  }

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if(newCharList.length < 9) {
      ended = true;
    }

    setCharList(charList => [...charList, ...newCharList]);
    setNewItemLoading(newItemLoading => false);
    setOffset(offset => offset + 9);
    setCharEnded(charEnded => ended);
  }

  const itemRefs = useRef([]);
  
  const focusOnItem = (id) => {
    itemRefs.current.forEach(item => item.classList.remove(`${s.cardActive}`));
    itemRefs.current[id].classList.add(`${s.cardActive}`);
    itemRefs.current[id].focus();
  }

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <section className={s.cardsList}>
      {errorMessage}
      {spinner}
      <div className={s.cardsWrap}>

        {charList.map((char, i) => (
        <div 
        key={char.id} 
        ref={el => itemRefs.current[i] = el}
        onClick={() => {
          props.onCharSelected(char.id)
          focusOnItem(i);
        }}
        onKeyPress={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            props.onCharSelected(char.id);
            focusOnItem(i);
          }
        }}
        className={s.card}>
            <img className={s.cardImg} src={char.thumbnail} alt="hero"></img>
            <h3 className={s.cardTitle}>{char.name}</h3>
        </div>
        ))}

      </div>
      <button 
        className={s.cardsListBtn}
        disabled={newItemLoading}
        style={{'display': charEnded ? 'none' : 'block'}}
        onClick={() => onRequest(offset)}
      >Load more</button>
    </section>
  )
}

HeroCardsList.propTypes = {
  onCharSelected: PropTypes.func.isRequired
}

export default HeroCardsList;