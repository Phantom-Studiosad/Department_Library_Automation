import React from 'react';

const SearchArea = (props) => {
    return(
        <div class = "search_area">
            <form onSubmit={props.searchBooks} action="">
                <div class="searchBox1">
                    <input onChange={props.handleSearch} class="searchInput1" type="text" name="" placeholder="Search"></input>
                    <button type="submit" class="searchButton1">
                        <i class="fa fa-search"></i>
                    </button>
                </div> 
                <select class="sort" defaultValue="Filter" onChange={props.handleSort}>
                    <option disabled value="Filter">Filter</option>
                    <option value="Newest">Price</option>
                    <option value="Oldest">Name</option>
                </select> 
                <select class="sort" defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort">Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>                               
            </form>
        </div> 
    )
}
export default SearchArea;
