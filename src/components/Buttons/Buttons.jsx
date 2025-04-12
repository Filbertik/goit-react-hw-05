import s from "./Buttons.module.css";

const Buttons = ({ handlePage, movieList }) => {
  return (
    <div className={s.box}>
      <button
        className={s.btn}
        type="button"
        disabled={movieList.page <= 1}
        onClick={() => handlePage(movieList.page - 1)}
      >
        Previous
      </button>
      <p className={s.text}>
        Page: <span>{movieList.page}</span>/of/{movieList.total_pages} /Last
      </p>
      <button
        className={s.btn}
        type="button"
        disabled={movieList.total_pages <= movieList.page}
        onClick={() => handlePage(movieList.page + 1)}
      >
        Next page
      </button>
    </div>
  );
};

export default Buttons;
