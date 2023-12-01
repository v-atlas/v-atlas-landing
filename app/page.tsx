import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import Services from './components/Home/Services';
import Target from './components/Home/Target';
import Footer from './components/Home/Footer';

export default function Home() {
  return (
    <div className=' min-h-screen'>
      <Header />
      <main>
        <Hero />
        <Services />
        <Target />
      </main>
      <Footer />
    </div>
  );
}
