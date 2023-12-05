import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import Services from './components/Home/Services';
import Target from './components/Home/Target';
import Footer from './components/Home/Footer';
import Team from './components/Home/Team';

export default function Home() {
  return (
    <div className=' min-h-screen'>
      <Header />
      <main>
        <Hero />
        <Services />
        <Target />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
