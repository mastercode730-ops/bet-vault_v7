import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Markets from '@/components/Markets';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="content-shift">
        <Hero />
        <TrustStrip />
        <WhyUs />
        <Process />
        <Markets />
        <About />
        <Blog />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
