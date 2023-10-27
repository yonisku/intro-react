//Select element with app "id"
const app = document.getElementById("app");

//Header Component
function Header({ title }) {
  return <h1>{title ? title : "Default"}</h1>;
}

//HomePage Component (parent)
function HomePage() {
  const names = ["Yonis", "Kurniawan"];
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header title="Hello World" />
      <Header title="React 💙" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li> //key for unique item
        ))}
      </ul>

      <button onClick={handleClick}>like ({likes})</button>
    </>
  );
}

//Render HomePage Component into element with app "id"
ReactDOM.render(<HomePage />, app);
