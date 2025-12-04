<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
</style>
import Header from "components/Header";
import Footer from "components/Footer";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <main>
        <section>
          <div className="splash-overlay-container">
            <img
              className="splash-image"
              src="/main.svg"
              alt="Main logo"
            />
            <img
              className="splash-image-overlay"
              src="/splash.svg"
              alt="White splash overlay"
            />
          </div>
        </section>
        <section>
           <img
              className="section-image"
              src="/access.svg"
              alt="Main logo"
            />
        </section>
        <section className="info-section">
        </section>
        <section className="empower-section">
        </section>
        <section className="seamless-withdrawals-section">
          <div className="seamless-wthdrawals-header">
            <p className="seamless-wthdrawals-header-subtitle">Access your funds anytime, anywhere.</p>
            <p className="seamless-wthdrawals-header-title">Seamless Withdrawals</p>
          </div>
        </section>
        <section className="daily-updates-section">
          <div className="daily-updates-header">
            <div>
              <p className="daily-updates-header-title">Daily Updates</p>
              <p className="daily-updates-header-text">Everything you need to trade the markets</p>
            </div>
            <div className="daily-updates-view-all"><p>View all</p></div>
          </div>
          <div className="daily-updates-cards-container">
            <div className="daily-updates-news">
              <img className="daily-updates-news-img" src="/newsImg.svg"/>
              <div className="daily-updates-news-content">
                <p className="daily-updates-news-date">03 October 2025</p>
                <p className="daily-updates-news-title">Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears</p>
                <p className="daily-updates-news-text">Stock markets in the Gulf ended mixed on Wednesday, buoyed by Ukraine’s readiness to support a proposal for...</p>
                <p className="daily-updates-news-read-more">Read more</p>
              </div>
            </div>
            <div className="daily-updates-video"><img src="/media.svg" /></div>
          </div>
          <div className="daily-updates-banner-container"><img className="daily-updates-banner-img" src="/banner.svg" /></div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials">
            <div className="testimonials-header">
              <p className="testimonials-header-text">What <span style={{color: "#ED1D25"}}>Premier</span> Traders are saying about us</p>
              <p className="testimonials-subtext">Join a growing community of professionals who rely on our platform to trade smarter every day.</p>
            </div>
            <div className="testimonials-scroll">
              <div className="testimonials-scroll-button"><img src="/leftArrow.svg" alt="Left arrow"/></div>
              <div className="testimonials-scroll-button"><img src="/rightArrow.svg" alt="Right arrow"/></div>
            </div>
            <div className="testimonials-card-container">
              <div className="card-container">
                <Card />
                <Card />
                <Card />
              </div>
              <div className="card-container">
                <Card />
                <Card />
                <Card />
              </div>
              <div className="card-container">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          <div className="register-fund-start-trading">

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
