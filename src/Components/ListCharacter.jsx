import { useEffect, useState } from "react";
import Character from "./Character";
import Pager from "./Pager";

function ListCharacter() {
  const [characters, setcharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);

  function ChangePage(NuevaPagina) {
    console.log(NuevaPagina);
    setpage(NuevaPagina);
  }

  useEffect(() => {
    async function FetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await response.json();
      setcharacters(data.results);
      setloading(false);
    }
    FetchData();
  }, [page]);

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        <Pager page={page} ChangePage={ChangePage.bind(this)}></Pager>

        <div className="columns is- is-multiline is-centered">
          {characters.map((item) => {
            return (
              <div className="column is-3" key={item.id}>
                <Character Character={item}></Character>
              </div>
            );
          })}
        </div>

        <Pager page={page} ChangePage={ChangePage.bind(this)}></Pager>
      </div>
    );
  }
}

export default ListCharacter;
