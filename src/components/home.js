
import logo from '../logo.svg';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();
  
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>

          </div>
          <p>
            {t('description.part1')}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('description.part2')}
          </a>
        </header>
      </div>
    );
  }