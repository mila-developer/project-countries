import React from "react";

const Search = (props) => {
  return (
    <div class="s-regions">
    Search
    <input class="input-regions" type="text" onChange={(evt)=>props.name(evt.target.value)} />

    </div>
  );
}

export default Search;