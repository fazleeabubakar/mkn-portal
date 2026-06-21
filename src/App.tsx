import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './i18n/ThemeContext';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CorporateInfo } from './components/CorporateInfo';
import { InvolvementHighlights } from './components/InvolvementHighlights';
import { NewsAnnouncements } from './components/NewsAnnouncements';
import { CrimeData } from './components/CrimeData';
import { Statistics } from './components/Statistics';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <TopBar />
        <Header />
        <main>
          <Hero />
          <NewsAnnouncements />
          <CrimeData />
          <CorporateInfo />
          <InvolvementHighlights />
          <Statistics />
          <Services />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
