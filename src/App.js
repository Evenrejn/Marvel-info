import './App.css';
import { AppHeader } from './components/appHeader/AppHeader';
import { HeroCard } from './components/heroCard/HeroCard';
import { HeroCardsList } from './components/heroCardsList/HeroCardsList';
import { RandomCard } from './components/randomCard/RandomCard';
import { SearchPanel } from './components/searchPanel/SearchPanel';
import { TopHero } from './components/topHero/TopHero';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="topWrap">
        <TopHero />
        <RandomCard />
      </div>
      <div className="mainWrap">
        <HeroCardsList />
        <div>
          <HeroCard />
          <SearchPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
