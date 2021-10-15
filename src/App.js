// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
          <h3 className="headerTitle"><span className="headerTitleMain">Marvel</span> information portal</h3>
          <h3 className="headerBreadcrumbs"><span className="headerBreadcrumbsMain">Characters </span> / Comics</h3>
      </header>

      <div className="topWrap">
        <div className="wrap">
          <img className="topImg" src="#" alt="hero"></img>
          <div className="topCard">
            <h3 className="topCardTitle">Thor</h3>
            <p className="topCardText">some desc</p>
            <div className="topBtnWrap">
              <button className="topInnerBtn">Homepage</button>
              <button className="topBtn">Wiki</button>
            </div>
          </div>
        </div>
        <div className="random">
          <div className="randomWrap">
            <p className="randomText">Random character for today!<br/> Do you want to get to know him better?</p>
          </div>
          <div className="randomWrapper">
            <p className="randomText">Or choose another one</p>
            <button className="randomBtn">Try it</button>
          </div>
        </div>
      </div>

      <div className="mainWrap">
        <section className="cardsList">
          <div className="cardsWrap">
            <div className="card">
              <img className="cardImg" src="#" alt="hero"></img>
              <h3 className="cardTitle">Abyss</h3>
            </div>
            <div className="card">
              <img className="cardImg" src="#" alt="hero"></img>
              <h3 className="cardTitle">Abyss</h3>
            </div>
            <div className="card">
              <img className="cardImg" src="#" alt="hero"></img>
              <h3 className="cardTitle">Abyss</h3>
            </div>
            <div className="card">
              <img className="cardImg" src="#" alt="hero"></img>
              <h3 className="cardTitle">Abyss</h3>
            </div>
          </div>
          <button className="cardsListBtn">Load more</button>
        </section>

        <div>

          <section className="about">



            <div className="aboutTop">
              <img className="aboutImg" src="#" alt="hero"></img>
              <div className="aboutTopWrap">
                <p className="aboutTitle">Loki</p>
                <button className="aboutInnerLink">Homepage</button>
                <button className="aboutLink">Wiki</button>
              </div>
            </div>
            <p className="aboutDesc">Some desc</p>
            <p className="aboutComics">Comics:</p>
            <ul className="aboutComicsLists">
              <li className="aboutComicsListsItem">Film 1983 #50</li>
              <li className="aboutComicsListsItem">Film @2</li>
              <li className="aboutComicsListsItem">Some film</li>
            </ul>

            {/* <div className="search">
              <p className="searchTitle">Or find a character by name:</p>
              <input className="searchInput" type="text" placeholder="Enter name" />
              <button className="searchBtn">Find</button>
            </div> */}



          </section>

          <div className="search">
              <p className="searchTitle">Or find a character by name:</p>
              <input className="searchInput" type="text" placeholder="Enter name" />
              <button className="searchBtn">Find</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
