import Character from "./Character";

const Home = () => {
  return (
    <div className="Home">
      <Character />
      <div className="msg">
        <p>
          this jokes are coming from{" "}
          <a href="https://api.chucknorris.io/">https://api.chucknorris.io/</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
