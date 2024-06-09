import Title from '../../shared/ui/title/Title';
import posts from '../../shared/lib/instagram.json';

const Instagram = () => {
  return (
    <div>
      <Title>Follow us on Instagram</Title>
      {posts.map((post) => (
        <img src={post.img} />
      ))}
    </div>
  );
};

export default Instagram;
