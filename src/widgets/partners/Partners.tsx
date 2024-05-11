import './Partners.css';

const patners = [
  {
    id: 1,
    name: 'Steps',
    img: '../../../public/Vector (1).png',
  },
  {
    id: 2,
    name: 'Mango',
    img: '../../../public/mango-1.png',
  },
  {
    id: 3,
    name: 'Bookof',
    img: '../../../public/bookoff-corporation-logo.png',
  },
  {
    id: 4,
    name: 'Food',
    img: '../../../public/food.png',
  },
  {
    id: 5,
    name: 'Steps',
    img: '../../../public/Group.png',
  },
  {
    id: 6,
    name: 'Steps',
    img: '../../../public/Group (1).png',
  },
];

const Partners = () => {
  return (
    <section className="about__partners">
      {patners.map((item) => (
        <li key={item.id}>
          <img src={item.img} alt={item.name} />
        </li>
      ))}
    </section>
  );
};

export default Partners;
