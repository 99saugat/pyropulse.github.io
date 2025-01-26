import { useState } from 'react';
import Navbar from './components/Navbar';
import RocketStove from './components/RocketStove';
import Workshop from './components/Workshop';
import Progress from './components/Progress';
import OrderSection from './components/OrderSection';

function App() {
  const [activeTab, setActiveTab] = useState('rocket-stove');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} setActiveTab={scrollToSection} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 space-y-24">
        <section id="rocket-stove">
          <RocketStove />
        </section>
        <section id="workshop">
          <Workshop />
        </section>
        <section id="progress">
          <Progress />
        </section>
        <section id="order" className="pt-12">
          <OrderSection />
        </section>
      </main>
    </div>
  );
}

export default App;