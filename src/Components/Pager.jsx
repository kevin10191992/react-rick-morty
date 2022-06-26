const Pager = (props) => {
  const page = props.page;
  const Prev = page - 1;
  const Sig = page + 1;
  const ShowPrev = Prev <= 0 ? false : true;

  function SigPage() {
    props.ChangePage(Sig);
  }

  function PrevPage() {
    props.ChangePage(Prev);
  }

  return (
    <div className="mt-3 mb-3">
      <nav className="level">
        <p className="level-item has-text-centered has-text-white">
          {ShowPrev ? (
            <button className="button" onClick={PrevPage}>
              <ion-icon name="arrow-back-outline"></ion-icon> Pagina {Prev}
            </button>
          ) : (
            ""
          )}
        </p>
        <h1 className="title is-1 level-item has-text-centered has-text-white">
          Página Actual {page}
        </h1>
        <p className="level-item has-text-centered has-text-white">
          <button className="button is-link" onClick={SigPage}>
            Pagina {Sig} <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </p>
      </nav>
    </div>
  );
};

export default Pager;
