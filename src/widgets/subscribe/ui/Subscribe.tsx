import Button from '../../../shared/ui/button/Button';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container subscribe__container">
        <div className="subscribe__text">
          <h4>Subcribe our Newsletter</h4>
          <p>
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna
          </p>
        </div>
        <div className="subscribe__form">
          <input type="email" name="" id="" />
          <Button>Subscribe</Button>
        </div>
        <div className="socials">
          <img src="/public/facebook.svg" alt="facebook" />
          <img src="/public/instagram.svg" alt="instagram" />
          <img src="/public/twitter.svg" alt="twitter" />
          <img src="/public/pinterest.svg" alt="pinterest" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
