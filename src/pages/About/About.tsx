import Button from '../../shared/ui/button/Button';

const About = () => {
  return (
    <div>
      <section>
        <div className="text">
          <h2>100% Trusted Organic Food Store</h2>
          <p>
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>

        <img src="/public/Image.jpg" alt="" />
      </section>
      <section>
        <img src="/public/Image.png" alt="" />
        <div className="text">
          <h2>100% Trusted Organic Food Store</h2>
          <p>
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
          </p>
        </div>
      </section>
      <section>
        <div className="text">
          <h2>We Delivered, You Enjoy Your Order.</h2>
          <p>
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </p>
          <ul>
            <li>
              <img src="/public/Check.svg" alt="" /> Sed in metus pellentesque.
            </li>
            <li>
              <img src="/public/Check.svg" alt="" /> Fusce et ex commodo,
              aliquam nulla efficitur, tempus lorem.
            </li>
            <li>
              <img src="/public/Check.svg" alt="" /> Maecenas ut nunc fringilla
              erat varius.
            </li>
          </ul>
          <Button>Shop now</Button>
        </div>
        <img src="/public/Image (1).png" alt="" />
      </section>
    </div>
  );
};

export default About;
