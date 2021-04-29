import useFetch from "./useFetch";

const Character = () => {
  const { data, isPending, error } = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );

  const handleButton = () => {
    window.location.reload();
  };

  return (
    <div className="Character">
      {isPending && (
        <div
          style={{
            color: "white",
          }}
        >
          <center>
            <div className="loader"></div>
          </center>
        </div>
      )}
      {error && (
        <div
          style={{
            color: "white",
          }}
        >
          {error}
        </div>
      )}

      {data && (
        <div className="Character__jokes">
          <img src={`${data.icon_url}`} alt="" />
          <h2>{data.value}</h2>
          <button onClick={handleButton}>New Joke</button>
        </div>
      )}
    </div>
  );
};

export default Character;
