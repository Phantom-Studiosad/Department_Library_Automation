import React from 'react';

const SearchArea = (props) => {
    return(
        <div class = "search-area">
            <form onsubmit={props.searchBooks} action="">
                <div class="searchBox1">
                    <input onChange={props.handleSearch} class="searchInput1" type="text" name="" placeholder="Search"></input>
                    <button class="searchButton1">
                        <i class="fa fa-search"></i>
                    </button>
                </div>                                
            </form>
        </div> 
    )
}
export default SearchArea;
