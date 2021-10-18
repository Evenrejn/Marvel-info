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
    error: false,
    newItemLoading: false,
    offset: 210,
    charEnded: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelService.getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError)
  }

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true
    })
  }

  onCharListLoaded = (newCharList) => {
    let ended = false;
    if(newCharList.length < 9) {
      ended = true;
    }

    this.setState(({offset, charList}) => ({
        charList: [...charList, ...newCharList], 
        loading: false,
        newItemLoading: false,
        offset: offset + 9,
        charEnded: ended
    }))
  }

  onError = () => {
    this.setState({
        loading: false,
        error: true
    })
  }

  render() {
    const {charList, loading, error, offset, newItemLoading, charEnded} = this.state;
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
        <button 
          className={s.cardsListBtn}
          disabled={newItemLoading}
          style={{'display': charEnded ? 'none' : 'block'}}
          onClick={() => this.onRequest(offset)}
        >Load more</button>
      </section>
  )
  }
}