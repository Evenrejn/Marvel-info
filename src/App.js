import './App.css';
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
    <div className="App">
      <AppHeader />
      {/* <div className="topWrap"> */}

        <ComicsPage />
      {/*// <ErrorBoundary> */}
        {/* <TopHero /> */}
      {/*// </ErrorBoundary> */}
      {/* </div>
      <div className="mainWrap">
        <ErrorBoundary>
          <HeroCardsList onCharSelected={onCharSelected}/>
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
              <HeroCard charId={selectedChar}/>
          </ErrorBoundary>
          <SearchPanel />
        </div> */}
      {/* </div> */}
    </div>
  );

}

export default App;
