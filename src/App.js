import './App.css';
import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AppHeader } from './components/appHeader/AppHeader';
import Spinner from './components/spinner/Spinner';

const Page404 = lazy(() => import ('./components/pages/404'));
const MainPage = lazy(() => import ('./components/pages/MainPage'));
const ComicsPages = lazy(() => import ('./components/pages/ComicsPages'));
const SingleComicPage = lazy(() => import ('./components/pages/SingleComicPage'));

const App = () => {

  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Suspense fallback={<Spinner/>}>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/comics">
              <ComicsPages />
            </Route>
            <Route exact path="/comics/:comicId">
              <SingleComicPage />
            </Route>
            <Route path="*">
              <Page404/>
            </Route>
          </Switch>
        </Suspense>
      </div>
      </Router>
  );
}

export default App;
