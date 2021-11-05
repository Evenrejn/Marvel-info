import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AppHeader } from './components/appHeader/AppHeader';
import {MainPage, ComicsPages, Page404, SingleComicPage} from "./components/pages";

const App = () => {

  return (
    <Router>
      <div className="App">
        <AppHeader />
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
      </div>
      </Router>
  );

}

export default App;
