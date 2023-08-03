import PropTypes from "prop-types";
import { useRef } from "react";
import { useKey } from "./CustomHook/useKey";

Search.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useKey("enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
export default Search;
