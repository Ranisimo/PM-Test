import CurrencyButtons from "@/app/components/currencyButtons/CurrencyButtons";
import AccessContainer from "@/app/components/accessContainer/AccessContainer";
import CardGrid from "app/components/card/CardGrid";

// Mock data for currency buttons, would be replaced with currencyData recieved from API/Backend 
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

// Mock data for testimonials, data would ideally come from an API/backend database and initials would be generated from the name via a function
let userJSON = [
  {
    "initials": "AK",
    "name": "Adam Keller",
    "source": "headset",
    "description": "I’m new in trading and I really like that Premier let me start small. I can trade crypto and few other assets easy. Withdrawls are quick too. Help Center is simple to use and I learned a lot from there."
  },
  {
    "initials": "ML",
    "name": "Marco Lazzari",
    "source": "world",
    "description": "My experince with PM is perfect so far. Payouts come same day few hours max. Works good with both crypto and credit card. You can take money out many times per day and no hidden fees. Spreads are ok too 😊"
  },
  {
    "initials": "TA",
    "name": "TradeAce",
    "source": "headset",
    "description": "Good service ☺️ Never had a single problem with withdraw. Usually takes under 24 hours. You get update when it’s submitted and when it’s done. Got many assets to trade and the spreads are not bad. And mT5  Thank you!"
  },
  {
    "initials": "LV",
    "name": "Lucas Vermeer",
    "source": "headset",
    "description": "Premier works well for me. KYC was fast and support people (Thx milos!!) 🤗 helped me right away when I had a question. I was able to deposit and start trading in same day. Withdrawal came to my bank after 2 days. All smooth."
  },
  {
    "initials": "PL",
    "name": "Petar Ilic",
    "source": "email",
    "description": "I think Premier’s trading cost are low compare to others. Spreads are good on most pairs, deposit is free, for withdraw they have a small fee but it’s fine. Thanks guys"
  },
  {
    "initials": "SK",
    "name": "Shivani Kaur",
    "source": "world",
    "description": "Multiple withdraws made, all success. Used both bank and international transfer. Also few friends joined from my referral and no issue for them. Been here long time, still all fine."
  },
  {
    "initials": "DL",
    "name": "David Lorens",
    "source": "email",
    "description": "Been using Premier for about 3 months now. Card deposits go through right away and show in balance within a minute. I withdraw my profit each month and it’s always in my bank by end of day. Very happy."
  },
  {
    "initials": "MR",
    "name": "Mark 'Clips' Renard",
    "source": "email",
    "description": "Premier is a serious broker. Web platform looks nice and runs good. Support reply quick and helpful. Sometimes small slippage in busy time but nothing crazy. Commisions are low so I stay here."
  },
  {
    "initials": "MD",
    "name": "Mateusz Durek",
    "source": "email",
    "description": "Deposit and withdraws are fast. One time my payout came before my bank even show the deduction lol. Trade speed is good and data feed fast too. Feels like pro level broker."
  },
];  

export default function HomePage() {

  // Mock useEffect and useState to fetch currency data from an API, functions may even be split into a seperate custom hook and called directly
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
          <div className="start-section-container">
            <div className="start-section-title-container df-fc-ac-jc">
              <p className="start-title">Trade Forex with Premier Markets</p>
              <p className="start-description">Access global markets with advanced trading tools, competitive spreads, and institutional grade execution.</p>
              <div className="start-button-container">
                <button className="start-button-main">Start Trading</button>
                <button className="start-button">Try Demo Account</button>
              </div>
            </div>
            <div className="start-section-image-container">
              <div style={{position: 'relative', width: '500px', height: '655px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', overflow: 'hidden'}}>
                <img
                  className="start-section-image"
                  src="/iPhoneSide.png"
                  alt="iPhone photo"
                />
                <img
                  className="start-section-image-mock"
                  src="/iPhoneMock.svg"
                  alt="iPhone mock"
                />
              </div>
            </div>
          </div>
          <div className="splash-overlay-container">
            <img
              className="splash-image-overlay"
              src="/splash.svg"
              alt="White splash overlay"
            />
            <div className="currency-button-container df-ac-jc">
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
          <div className="info-container df-fc-ac-jc">
            <div className="info-header df-ac-jc">
              <p className="info-title">Join <span style={{color: "#ED1D25"}}>50,000+</span> traders who trust us</p>
              <div className="info-text-container"> 
                <p className="info-description">Experience advanced trading tools, transparent and competitive pricing, lightnaing-fast execution, and dedicated support trusted by traders worldwide.</p>
                <div className="info-button-container">
                  <button className="info-button-main">Start Trading</button>
                  <button className="info-button">Try Demo Account</button>
                </div>
              </div>
            </div>
            <div className="info-banner"></div>
          </div>
          <div className="info-markets-container df-fc-ac-jc">
            <div className="info-markets-header df-fc-ac-jc">
              <p className="info-title-markets">Our Markets</p>
              <p className="info-description-markets">Stay informed with the data that matters, on 17,000+ markets. Get the latest news, trader sentiment, spreads, price action and much more.</p>
            </div>
            <div className="info-button-container">
              <button className="info-button-main">Most Traded</button>
              <button className="info-button">Commodities</button>
              <button className="info-button">Indicies</button>
              <button className="info-button">Cryptocurrencies</button>
              <button className="info-button">Shares</button>
              <button className="info-button">EFTs</button>
            </div>
            <img className="info-section-image" src="/graph.svg" alt="Graph"/>
          </div>
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
            <div className="daily-updates-video"><img className="daily-updates-video-thumbnail" src="/media.svg" /></div>
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
                <CardGrid users={userJSON} />
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
