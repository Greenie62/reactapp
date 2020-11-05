import React from 'react'

const Search = ({query,setQuery,searchFood}) => {
    return (
        <div className="searchRow">
            <label htmlFor="query">Search:</label>
            <input type="text" name="query" id="query" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="hungry_for..."/>
            <button onClick={searchFood} className="searchbtn">Feed Me</button>
            
        </div>
    )
}

export default Search
