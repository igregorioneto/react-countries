import Item from "./Item";

export default function Country({
  children: country=null,
  onClickCountry=null,
  isVisited=false,
}) {
  if (!country) {
    return <div>Impossível renderizar o pais</div>
  }

  const {name, capital, region, population, area } = country;

  function handleClickCountry() {
    if (onClickCountry) {
      onClickCountry(name);
    }
  }

  const demographicDensity = population / area;

  const isVisitedClass = isVisited ? 'bg-green-100' : '';

  return(
    <div 
      className={`border p-2 m-2 flex flex-row itens-center space-x-2 cursor-pointer ${isVisitedClass}`}
      onClick={handleClickCountry}
      >
      <img className="w-48" src="../assets/image-not-found.jpg" alt={name} />

      <ul>
        <li>
          <Item label="Nome:">{name}</Item>
        </li>
        <li>
          <Item label="Capital:">{capital}</Item>
        </li><li>
          <Item label="Região:">{region}</Item>
        </li><li>
          <Item label="Densidade demográfica:">
            {demographicDensity ? demographicDensity : 0}
          </Item>
        </li>
      </ul>
    </div>
  )
}