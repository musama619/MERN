import { useState, useEffect } from "react";
import GameDetail from "../components/GameDetail";
import GameForm from "../components/GameForm";
const Home = () => {
  const [games, setGames] = useState(null);
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("/api/game");
      const json = await response.json();
      if (response.ok) {
        setGames(json);
      }
    };
    fetchGames();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {games?.map((values, index) => (
          <GameDetail game={values} key={values._id} />
        ))}
      </div>
      <GameForm />
    </div>
  );
};

export default Home;
