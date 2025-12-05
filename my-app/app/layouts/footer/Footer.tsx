export default function Footer() {
  return (
    <footer className="footer df-fc-ac-jc">
      <div className="red-border"></div>
      <div className="pay-options-container df-ac-jc">
        <div className="pay-options df-ac-jc">
          <img className="pay-options-img" src="/paypal.png"
              alt="PayPal logo" style={{height: "31.32px"}}/>
          <img className="pay-options-img" src="/mastercard.png"
              alt="Mastercard logo" style={{height: "38.19px"}}/>
          <img className="pay-options-img" src="/skrill.svg"
              alt="Skrill logo"/>
          <img className="pay-options-img" src="/applePay.svg"
              alt="ApplePay logo"/>
          <img className="pay-options-img" src="/visa.svg"
              alt="Visa logo"/>
        </div>
      </div>
      <div className="quick-info">
        <div className="about-info">
          <img className="about-info-logo" src="/logoLight.svg" alt="Main logo" />
          <p className="about-text urbanist-400">CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 21.38% of retail investor accounts generate profits when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>
          <img className="about-info-socials" src="/socials.svg" alt="Main logo" />
        </div>
        <div className="links-container">
          <div>
            <p className="links-header">Quick links</p>
            <ul>
              <li className="urbanist-400">About Us</li>
              <li className="urbanist-400">Our Markets</li>
              <li className="urbanist-400">Platforms</li>
              <li className="urbanist-400">Pricing</li>
            </ul>
          </div>
          <div>
            <p className="links-header">Support</p>
            <ul>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="links-header">Company</p>
            <ul>
              <li>Careers</li>
              <li>News & Updates</li>
              <li>Partnerships</li>
              <li>Legal Documents</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-warning df-fc-ac-jc">
        <p className="urbanist-400">CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 21.38% of retail investor accounts generate profits when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>
        <p className="urbanist-400">Premier Markets Ltd, trading as Premier Markets is a company incorporated under company number: A000003075 in Anguilla. Our registered office is located at Anguilla, The Valley, Kismet House, Sandy Hill, PO Box P.O.Box 174The information on this site is not directed at residents of Russia, Afghanistan, Belgium, Canada, India, United States or any country or jurisdiction where such distribution or use would be contrary to local law, sanctions or regulation.</p>
      </div>
      <div className="footer-copyright df-ac-jc">
        Copyright © 2025 Premier Markets - All Rights Reserved.
      </div>
    </footer>
  );
}