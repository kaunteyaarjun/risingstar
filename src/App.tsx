
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import QuoteBanner from './components/QuoteBanner';
import ProjectShowcase from './components/ProjectShowcase';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Services />
      <ProjectGallery />
      <QuoteBanner />
      <ProjectShowcase />
      <About />
      <Footer />
    </Layout>
  );
}

export default App;
