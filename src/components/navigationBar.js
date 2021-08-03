import { Container, Navbar, Nav, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useTranslation } from 'react-i18next';

const languages = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  zh: { nativeName: '中文'}
};
export default function NavigationBar() {
  const { t, i18n } = useTranslation();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Good React Translations</Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer exact={true} to="/">
                <Nav.Link>{t('navbar.home')}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>{t('navbar.about')}</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav.Item className="ml-auto">
              {Object.keys(languages).map((language) => (
                  <Button className='btn-info mx-1'key={language} style={{ fontWeight: i18n.language === language ? 'bold' : 'normal' }} type="submit" onClick={() => {
                    i18n.changeLanguage(language);
                  }}>
                    {languages[language].nativeName}
                  </Button>
              ))}
            </Nav.Item>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
