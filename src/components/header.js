import { DateTime } from 'luxon';
import './header.css';

const getGreetingTime = (d = DateTime.now()) => {
    const split_afternoon = 12; // 24hr time to split the afternoon
    const split_evening = 17; // 24hr time to split the evening
    const currentHour = d.c.hour;
    if (currentHour >= split_afternoon && currentHour <= split_evening) {
        return 'afternoon';
    } else if (currentHour >= split_evening) {
        return 'evening';
  }
    return 'morning';
}

const Header = ({ t }) => (
  <div className="header p-4">
    <h3>{t('header.date', { date: new Date(), context: getGreetingTime() })}</h3>
  </div>
);

export default Header;