import './App.css';
import { AppHeader } from './components/appHeader/AppHeader';
import { HeroCard } from './components/heroCard/HeroCard';
import { HeroCardsList } from './components/heroCardsList/HeroCardsList';
import { SearchPanel } from './components/searchPanel/SearchPanel';
import { TopHero } from './components/topHero/TopHero';
import { Component } from 'react';

class App extends Component {
  state = {
    selectedChar: null
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="topWrap">
          <TopHero />
        </div>
        <div className="mainWrap">
          <HeroCardsList onCharSelected={this.onCharSelected}/>
          <div>
            <HeroCard charId={this.state.selectedChar}/>
            <SearchPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
