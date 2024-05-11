import './OurTeam.css';

const team = [
  {
    id: 1,
    name: 'Jenny Wilson',
    position: 'Ceo & Founder',
    img: '../../../public/Image (1).jpg',
  },
  {
    id: 2,
    name: 'Jane Cooper',
    position: 'Worker',
    img: '../../../public/Image (2).jpg',
  },
  {
    id: 3,
    name: 'Cody Fisher',
    position: 'Security Guard',
    img: '../../../public/Image (3).jpg',
  },
  {
    id: 4,
    name: 'Robert Fox',
    position: 'Senior Farmer Manager',
    img: '../../../public/Image (4).jpg',
  },
];

const OurTeam = () => {
  return (
    <section className="about__team">
      <h2>Our Awesome Team</h2>
      <p>
        Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla
        et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
      </p>
      <div className="team__container">
        {team.map((person) => (
          <li key={person.id} className="team__card">
            <img src={person.img} alt={person.name} />
            <span>{person.name}</span>
            <span>{person.position}</span>
          </li>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
