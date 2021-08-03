import { Suspense  } from 'react';
import './App.css';
import NavigationBar from './components/navigationBar';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <Router>
      <Switch>
        <div className="App">
          <NavigationBar/>
          <Header t={t} i18n={i18n} />  
          <Route exact={true} path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Switch>
    </Router>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
        <App/>
    </Suspense>
  );
}

