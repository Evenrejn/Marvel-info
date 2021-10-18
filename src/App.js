import './App.css';
import { AppHeader } from './components/appHeader/AppHeader';
import { HeroCard } from './components/heroCard/HeroCard';
import { HeroCardsList } from './components/heroCardsList/HeroCardsList';
import { SearchPanel } from './components/searchPanel/SearchPanel';
import { TopHero } from './components/topHero/TopHero';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { Component } from 'react';
import ErrorMessage from './components/errorMessage/ErrorMessage';

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
        <ErrorBoundary>
          <TopHero />
        </ErrorBoundary>
        </div>
        <div className="mainWrap">
          <ErrorBoundary>
            <HeroCardsList onCharSelected={this.onCharSelected}/>
          </ErrorBoundary>
          <div>
            <ErrorBoundary>
                <HeroCard charId={this.state.selectedChar}/>
            </ErrorBoundary>
            <SearchPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
