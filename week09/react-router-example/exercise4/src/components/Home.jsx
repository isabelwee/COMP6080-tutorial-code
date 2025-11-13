import { Link } from "react-router-dom";

const Home = () => {
  const generateRndInt = () => {
    return Math.floor(Math.random() * (100 - 1) + 1)
  }

  const id = generateRndInt();
  return (
    <Link to={`/post/:${id}`} >{id}</Link>
  );
}

export default Home;