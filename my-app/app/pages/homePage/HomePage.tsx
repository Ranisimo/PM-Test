import Card from "@/app/components/card/Card";
import CurrencyButtons from "@/app/components/currencyButtons/CurrencyButtons";
import AccessContainer from "@/app/components/accessContainer/AccessContainer";

// Mock data for currency buttons
let currencyJSON = [
  {
    "currency": "USD/EUR",
    "icon": "/usdeu.svg",
    "vector": "/upVector.svg", // Ideally, wouldn't be svgs and would be data-driven
    "price": 0.00014,
    "trend": -234.45
  },
  {
    "currency": "XAUUSD",
    "icon": "/asset.png",
    "vector": "/downVector.svg",
    "price": 0.00014,
    "trend": -234.45
  },
  {
    "currency": "USD/EUR",
    "icon": "/usdeu.svg",
    "vector": "/upVector.svg",
    "price": 0.00014,
    "trend": -234.45
  },
  {
    "currency": "XAUUSD",
    "icon": "/asset.png",
    "vector": "/downVector.svg",
    "price": 0.00014,
    "trend": -234.45
  }
];  

export default function HomePage() {

  // Mock useEffect and useState to fetch currency data from an API
  //  const [currencyData, setCurrencyData] = useState(null);

  //   useEffect(() => {
  //     const fetchCurrencyData = async () => {
  //       try {
  //         const response = await fetch('https://api.example.com/data');
  //         const jsonData = await response.json();
  //         setCurrencyData(jsonData);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };
  //     fetchCurrencyData();
  //   }, []);

  return (
    <div className="homepage">
      <main>
        <section className="start-section">
          <p className="start-title">Trade Forex with Premier Markets</p>
          <p className="start-description">Access global markets with advanced trading tools, competitive spreads, and institutional grade execution.</p>
          <div>
            <button className="start-button-main"><span style={{color: '#ED1D25'}}>Start Trading</span></button>
            <button className="start-button">Try Demo Account</button>
          </div>
          <div className="splash-overlay-container">
            <img
              className="splash-image-overlay"
              src="/splash.svg"
              alt="White splash overlay"
            />
            <div className="currency-button-container df-ac-jc">
              {/* currencyJSON would be replaced with currencyData recieved from API/Backend */}
              <CurrencyButtons items={currencyJSON} /> 
            </div>
          </div>
        </section>
        <section className="access-section">
          <div className="access-header df-fc-ac-jc">
            <p className="access-title">Access <span style={{color: "#ED1D25"}}>17,000+</span> markets all in one</p>
            <p className="access-title-description">Trade forex, shares, indices, and commodities with competitive spreads, deep liquidity, and seamless execution.</p>
            <div className="access-button-container">
              <button className="access-button">$0 Deposit Fees</button>
              <button className="access-button">Spreads from 0.0 pips</button>
              <button className="access-button">Secure Funds</button>
            </div>
          </div>
          <div className="access-cards-container df-ac-jc">
              <AccessContainer imgSrc={'coin.svg'} title={'Forex'} description={"Trade the world’s largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs."}/>
              <AccessContainer imgSrc={'graphAscend.svg'} title={'Stocks'} description={"From Wall Street to global tech leaders, follow the world’s leading companies and react to market moves in real time."}/>
              <AccessContainer imgSrc={'analyticsPie.svg'} title={'Indicies'} description={"Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets."}/>
              <AccessContainer imgSrc={'earth.svg'} title={'Commodities'} description={"Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products."}/>
          </div>
        </section>
        <section className="info-section df-fc-ac-jc">
          <div className="info-header">
            <p className="info-title">Join <span style={{color: "#ED1D25"}}>50,000+</span> traders who trust us</p>
            <div className="info-text-container"> 
              <p className="info-description">Experience advanced trading tools, transparent and competitive pricing, lightnaing-fast execution, and dedicated support trusted by traders worldwide.</p>
              <div>
                <button className="info-button-main">Start Trading</button>
                <button className="info-button">Try Demo Account</button>
              </div>
            </div>
            <div></div>
          </div>
          <div className="info-markets-header df-fc-ac-jc">
            <p className="info-title">Our Markets</p>
            <p className="info-description"><span style={{color: '#A8A6B1'}}>Stay informed with the data that matters, on 17,000+ markets1. Get the latest news, trader sentiment, spreads, price action and much more.</span></p>
          </div>
          <div>
            <button className="info-button-main">Most Traded</button>
            <button className="info-button">Commodities</button>
            <button className="info-button">Indicies</button>
            <button className="info-button">Cryptocurrencies</button>
            <button className="info-button">Shares</button>
            <button className="info-button">EFTs</button>
          </div>
          <img className="info-section-image" src="/graph.svg" alt="Graph"/>
        </section>
        <section className="empower-section">
        </section>
        <section className="seamless-withdrawals-section df-fc-ac-jc">
          <div className="seamless-wthdrawals-header df-fc-ac-jc">
            <p className="seamless-wthdrawals-header-subtitle">Access your funds anytime, anywhere.</p>
            <p className="seamless-wthdrawals-header-title">Seamless Withdrawals</p>
          </div>
          <div className="seamless-withdrawals-info-container">
            <div  className="seamless-withdrawals-options-container">
              <div className="seamless-withdrawals-option-container">
                <img className="seamless-withdrawals-icon" src='/ultraFastIcon.svg'/>
                <div className="seamless-withdrawals-text-container">
                  <p className="seamless-withdrawals-text-title">Ultra-Fast Processing</p>
                  <p className="seamless-withdrawals-text-description">Over 99% of withdrawals processed within 24 hours, based on verified 2025 internal performance data.</p>
                </div>
              </div>
              <div className="seamless-withdrawals-option-container">
                <img className="seamless-withdrawals-icon" src='/secureTransparentIcon.svg'/>
                <div className="seamless-withdrawals-text-container">
                  <p className="seamless-withdrawals-text-title">Secure & Transparent</p>
                  <p className="seamless-withdrawals-text-description">Tier 1 banking and custody partners keep your funds protected at every stage.</p>
                </div></div>
              <div className="seamless-withdrawals-option-container">
                <img className="seamless-withdrawals-icon" src='/effortlessAccessIcon.svg'/>
                <div className="seamless-withdrawals-text-container">
                  <p className="seamless-withdrawals-text-title">Effortless Access</p>
                  <p className="seamless-withdrawals-text-description">Enjoy quick withdrawals with no hidden fees and a smooth, seamless process.</p>
                </div></div>
            </div>
            <img className="seamless-withdrawals-image" src="/mobileHand.png" alt="Withdrawals illustration"/>
          </div>
        </section>
        <section className="daily-updates-section df-fc-ac-jc">
          <div className="daily-updates-header df-ac-jc">
            <div>
              <p className="daily-updates-header-title">Daily Updates</p>
              <p className="daily-updates-header-text">Everything you need to trade the markets</p>
            </div>
            <div className="daily-updates-view-all"><p>View all</p></div>
          </div>
          <div className="daily-updates-cards-container df-ac-jc">
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
        <section className="testimonials-section df-fc-ac-jc">
          <div className="testimonials df-fc-ac-jc">
            <div className="testimonials-header df-fc-ac-jc">
              <p className="testimonials-header-text">What <span style={{color: "#ED1D25"}}>Premier</span> Traders are saying about us</p>
              <p className="testimonials-subtext">Join a growing community of professionals who rely on our platform to trade smarter every day.</p>
            </div>
            <div className="testimonials-scroll">
              <div className="testimonials-scroll-button df-ac-jc"><img src="/leftArrow.svg" alt="Left arrow"/></div>
              <div className="testimonials-scroll-button df-ac-jc"><img src="/rightArrow.svg" alt="Right arrow"/></div>
            </div>
            <div className="testimonials-card-container df-ac-jc">
              <div className="card-container df-fc-ac-jc">
                <Card />
                <Card />
                <Card />
              </div>
              <div className="card-container df-fc-ac-jc">
                <Card />
                <Card />
                <Card />
              </div>
              <div className="card-container df-fc-ac-jc">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          <div className="register-fund-start-trading df-ac-jc">

          </div>
        </section>
      </main>
    </div>
  );
}
