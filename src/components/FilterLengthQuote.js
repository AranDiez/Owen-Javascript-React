// import '../styles/FilterMovie.scss';

function FilterLengthQuote(props) {
  const handleLengthSearch = (ev) => {
    props.handleFilterLength(parseInt(ev.target.value));
  };
  return (
    <>
      <div className="main__form--movie">
        <label className="main__form--movieLabel" htmlFor="movieSearch">
          Quote of length
          <input
            className="main__form--movieInput"
            type="text"
            name="movieSearch"
            value={props.filterLength}
            onChange={handleLengthSearch}
            placeholder="Search length..."
          />
        </label>
      </div>
    </>
  );
}
export default FilterLengthQuote;
