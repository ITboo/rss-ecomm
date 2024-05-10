import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <img src="/public/NotFound.png" alt="Not Found" />
      <h2>Oops! page not found</h2>
      <p>
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas
        sagittis tortor at metus mollis
      </p>
      <button>Back to Home</button>
    </div>
  );
};

export default NotFound;
