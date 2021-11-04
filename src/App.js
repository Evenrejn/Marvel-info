import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AppHeader } from './components/appHeader/AppHeader';
import HeroCard from './components/heroCard/HeroCard';
import HeroCardsList from './components/heroCardsList/HeroCardsList';
import { SearchPanel } from './components/searchPanel/SearchPanel';
import TopHero from './components/topHero/TopHero';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { useState } from 'react';
// import ErrorMessage from './components/errorMessage/ErrorMessage';
import ComicsPage from "./components/comicsPage/ComicsPage";

const App = () => {

  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id)
  }

  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route exact path="/">
            <div className="topWrap">           
              {/* // <ErrorBoundary> */}
              <TopHero />
              {/* // </ErrorBoundary> */}
            </div>
            <div className="mainWrap">
              <ErrorBoundary>
                <HeroCardsList onCharSelected={onCharSelected}/>
              </ErrorBoundary>
              <div>
                <ErrorBoundary>
                    <HeroCard charId={selectedChar}/>
                </ErrorBoundary>
                <SearchPanel />
              </div>
            </div>
          </Route>
          <Route exact path="/comics">
            <ComicsPage />
          </Route>
        </Switch>
      </div>
      </Router>
  );

}

export default App;
