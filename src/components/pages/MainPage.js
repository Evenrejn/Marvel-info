import TopHero from '../topHero/TopHero';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import HeroCard from '../heroCard/HeroCard';
import HeroCardsList from '../heroCardsList/HeroCardsList';
import { SearchPanel } from '../searchPanel/SearchPanel';

import { useState } from 'react';


const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
      setChar(id)
    }

    return (
        <>
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
        </>
    )
}

export default MainPage;