import "./Styles/Footer.scss";

export default function Foot() {
  return (
    <footer>
      <div class="operationhrs">
        <h3>Contact Admin</h3>
        <p>Monday to Friday</p>
        <p>9am to 5pm</p>
        <p>Weekends</p>
        <p>11am to 5pm</p>
      </div>

      <div class="location">
        <h3>Address</h3>
        <p>782 Dundas St W,</p>
        <p>Toronto,</p>
        <p>ON M1Y 5Z8,</p>
        <p>Canada</p>
        <p>Phone: +1 416-555-5555</p>
        <p>www.Rankd.com</p>
      </div>

      <div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.090146165748!2d-79.41118508418101!3d43.64629277912153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34e3e4fc0da1%3A0xb4f196455a5780e3!2s716%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M6J%201G1%2C%20Canada!5e0!3m2!1sen!2ssa!4v1638185479827!5m2!1sen!2ssa"
          width="300"
          height="275"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe> */}
      </div>

      <div>
        <h3>Contact Support</h3>
        <p>www.rankd.com</p>
        <p>Phone: +1 416-555-5555</p>
        <p>Email: info@Rankd.com</p>
      </div>

      <div>
        <h3>LINKS</h3>
        <a class="footer-links" href="/Messages">
          Messages
        </a>
        <p></p>
        <a class="footer-links" href="/">
          Profile
        </a>
      </div>
    </footer>
  );
}
