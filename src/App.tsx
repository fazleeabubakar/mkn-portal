import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CorporateInfo } from './components/CorporateInfo';
import { InvolvementHighlights } from './components/InvolvementHighlights';
import { NewsAnnouncements } from './components/NewsAnnouncements';
import { Statistics } from './components/Statistics';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <CorporateInfo />
        <InvolvementHighlights />
        <Statistics />
        <NewsAnnouncements />
        <Services />
      </main>
      <Footer />
    </>
  );
}
