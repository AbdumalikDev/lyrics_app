import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { Provider } from './context';
import HomeScreen from './screens/HomeScreen';
import LyricScreen from './screens/LyricScreen';

function App() {
  return (
    <Provider>
      <Router>
        <Fragment>
          <Header />

          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/lyrics/track/:id' component={LyricScreen} />
          </Switch>

          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
