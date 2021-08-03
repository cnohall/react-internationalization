
import logo from '../logo.svg';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {t('about.part1')}
          </p>
          <p>
            {t('about.part2')}
          </p>
        </header>
      </div>
    );
  }