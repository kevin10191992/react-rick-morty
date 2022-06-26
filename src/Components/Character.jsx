export default function Character(props) {
  const it = props.Character;
  return (
    <div className="has-background-dark m-3">
      <header className="card-header has-background-primary">
        <h5 className="title is-5 has-text-white card-header-title">
          {it.name}
        </h5>
      </header>
      <figure className="image is-512x512 mt-4">
        <img className="is-rounded" src={it.image} alt={it.name} />
      </figure>
      <p className="has-text-centered  has-text-white">{it.origin.name}</p>
    </div>
  );
}
