import s from "./heroCard.module.css";
import { useState, useEffect } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from 'prop-types';

export const HeroCard = (props) => {

  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    const {charId} = props;
    if (!charId) {
      return;
    }

    onCharLoading();

    marvelService
      .getCharacter(charId)
      .then(onCharLoaded)
      .catch(onError)
  }

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


  // const skeleton = char || loading || error ? null : <Skeleton />;
  const skeleton = char || loading || error ? null : null;
  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <section className={s.about}>
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </section>
  )
}

const View = ({char}) => {
  const {name, desc, thumbnail, homepage, wiki, comics} = char;
  return (
    <>
      <div className={s.aboutTop}>
        <img className={s.aboutImg} src={thumbnail} alt={name}></img>
        <div className={s.aboutTopWrap}>
          <p className={s.aboutTitle}>{name}</p>
          <a href={homepage} className={s.aboutInnerLink}>Homepage</a>
          <a href={wiki} className={s.aboutLink}>Wiki</a>
        </div>
      </div>
      <p className={s.aboutDesc}>{desc || "No information"}</p>
      <p className={s.aboutComics}>Comics:</p>
      <ul className={s.aboutComicsLists}>
        {comics.length > 0 ? null : "No comics"}
        { 
          comics.map((item, i) => {
            if (i > 10) return;
            return (
              <li key={i} className={s.aboutComicsListsItem}>{item.name}</li>
            )
          })
        }
      </ul>
    </>
  )
}

HeroCard.propTypes = {
  charId: PropTypes.number
}



