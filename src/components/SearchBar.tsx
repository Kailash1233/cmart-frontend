import React from 'react'

const SearchBar = () => {

  return (
    <div className="w-100 p-4 text-black bg-white  fd-hover-border-primary border border-1">
        <h5 className='fw-bold'>Search</h5>
        <form action="" method="post" className='w-100 d-flex'>
            <div className="w-75"><input type="text" name="searchquery" placeholder='Search Here ...' className='p-3 border border-1 rounded-0'/></div>
            <div className="w-25"><button type='submit' className='btn btn-outline-dark rounded-0 py-3 px-4'><i className="bi bi-search"></i></button></div>
        </form>
    </div>
  )
}

export default SearchBar

// import React, { useState, ChangeEvent, FormEvent } from "react";

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const [query, setQuery] = useState<string>("");

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <div className="w-100 p-4 text-black bg-white fd-hover-border-primary border border-1">
//       <h5 className="fw-bold">Search</h5>
//       <form onSubmit={handleSubmit} className="w-100 d-flex">
//         <div className="w-75">
//           <input
//             type="text"
//             name="searchquery"
//             value={query}
//             onChange={handleInputChange}
//             placeholder="Search Here ..."
//             className="p-3 border border-1 rounded-0"
//           />
//         </div>
//         <div className="w-25">
//           <button
//             type="submit"
//             className="btn btn-outline-dark rounded-0 py-3 px-4"
//           >
//             <i className="bi bi-search"></i>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
