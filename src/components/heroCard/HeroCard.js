import s from "./heroCard.module.css";
// import ComicsList from "../comicsList/ComicsList";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

export class HeroCard extends Component {

  state = {
    char: null,
    loading: false,
    error: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  updateChar = () => {
    const {charId} = this.props;
    if (!charId) {
      return;
    }

    this.onCharLoading();

    this.marvelService
      .getCharacter(charId)
      .then(this.onCharLoaded)
      .catch(this.onError)
  }

  onCharLoaded = (char) => {
    this.setState({
        char, 
        loading: false,
    })
  }

  onCharLoading = () => {
    this.setState({
        loading: true
    })
  }

  onError = () => {
    this.setState({
        loading: false,
        error: true
    })
  }

  render() {
    const {char, loading, error} = this.state;

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
        {/* <div className={s.aboutTop}>
          <img className={s.aboutImg} src="#" alt="hero"></img>
          <div className={s.aboutTopWrap}>
            <p className={s.aboutTitle}>Loki</p>
            <button className={s.aboutInnerLink}>Homepage</button>
            <button className={s.aboutLink}>Wiki</button>
          </div>
        </div>
        <p className={s.aboutDesc}>Some desc</p>
        <p className={s.aboutComics}>Comics:</p>
        <ComicsList /> */}
      </section>
    )
  }
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
          {/* <button className={s.aboutInnerLink}>Homepage</button>
          <button className={s.aboutLink}>Wiki</button> */}
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
      {/* <ComicsList /> */}
    </>
  )
}





