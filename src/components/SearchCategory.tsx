import React from 'react'
import { searchData } from '../views/VirtualData'
import { Link } from 'react-router-dom'

export const Search = ({search_id, name} : {search_id : number, name : string}) => {

    return <div className="search-tags text-dark mt-3">
        <span><Link to={"/"} className='text-dark fw-bold opacity-75 p-2 border border-1'>{name}</Link></span>
    </div>
  }

const SearchCategory = ({type = 'recent'} : {type : string}) => {

  return (
    <div className='d-flex flex-wrap gap-2'>
        { searchData.map((search) => <Search {...search} key={search.search_id} />) }
    </div>
  )
}

export default SearchCategory

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar"; // Adjust the import path as necessary

// interface SearchItem {
//   search_id: number;
//   name: string;
// }

// interface SearchCategoryProps {
//   searchData: SearchItem[];
// }

// const Search: React.FC<SearchItem> = ({ search_id, name }) => {
//   return (
//     <div className="search-tags text-dark mt-3">
//       <span>
//         <Link
//           to={`/`}
//           className="text-dark fw-bold opacity-75 p-2 border border-1"
//         >
//           {name}
//         </Link>
//       </span>
//     </div>
//   );
// };

// const SearchCategory: React.FC<SearchCategoryProps> = ({ searchData }) => {
//   const [filteredData, setFilteredData] = useState<SearchItem[]>(searchData);

//   const handleSearch = (query: string) => {
//     const lowercasedQuery = query.toLowerCase();
//     const filtered = searchData.filter((item) =>
//       item.name.toLowerCase().includes(lowercasedQuery)
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//       <div className="d-flex flex-wrap gap-2">
//         {filteredData.map((search) => (
//           <Search {...search} key={search.search_id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchCategory;
