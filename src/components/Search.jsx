var Search = ({handleSearch}) => {
  handleSearch = _.debounce(handleSearch, 500);

  return (
    <div className="search-bar form-inline">
      <input 
        className="form-control" 
        type="text" 
        // onChange={(e) => props.handleSearch(e.target.value)}/>
        onChange={(e) => handleSearch(e.target.value)}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declaratiosns will only exist globally where explicitly defined
export default Search;
