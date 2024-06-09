import Title from '../../shared/ui/title/Title';
import Instagram from '../../widgets/instagram/Instagram';
import Partners from '../../widgets/partners/Partners';
import Testimonials from '../../widgets/testimonials/Testimonials';
import './Main.css';

import categories from '../../shared/lib/categories.json';

const Main = () => {
  return (
    <div>
      <Title>Popular Categories</Title>
      <div className="categories">
        {categories.map((el) => (
          <li className="categories__card">
            <img src={el.img} alt={el.name} />
            <h3>{el.name}</h3>
          </li>
        ))}
      </div>

      <Title>Popular Products</Title>
      <Title>Hot Deals</Title>
      <Title>Featured Products</Title>
      <Title>Latest News</Title>
      <Testimonials />
      <Partners />
      <Instagram />
    </div>
  );
};

export default Main;
