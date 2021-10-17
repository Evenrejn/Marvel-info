import s from "./heroCardsList.module.css";
// import { TargetCard } from "../targetCard/TargetCard";
import MarvelService from "../../services/MarvelService";
import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

export class HeroCardsList extends Component {

  state = {
    charList: [],
    loading: true,
    error: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharListLoaded)
      .catch(this.onError)
  }

  onCharListLoaded = (charList) => {
    this.setState({
        charList, 
        loading: false,
    })
  }

  onError = () => {
    this.setState({
        loading: false,
        error: true
    })
  }

  render() {
    const {charList, loading, error} = this.state;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner /> : null;

    return (
      <section className={s.cardsList}>
        {errorMessage}
        {spinner}
        <div className={s.cardsWrap}>

          {charList.map((char) => (
          <div 
          key={char.id} 
          onClick={() => this.props.onCharSelected(char.id)}
          className={s.card}>
              <img className={s.cardImg} src={char.thumbnail} alt="hero"></img>
              <h3 className={s.cardTitle}>{char.name}</h3>
          </div>
          ))}

        </div>
        <button className={s.cardsListBtn}>Load more</button>
      </section>
  )
  }
}