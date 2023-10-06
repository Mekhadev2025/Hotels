import React, { useState } from "react";
import "../Home/Home.css";
import Card from "../Cards/Card";
import data from "../../data";
import Pagination from "../Pagination";
const Home = (props) => {
  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerPage,setPostsPerpage] = useState(6);
  const searchValue = props.values;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const filteredData = searchValue
    ? data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : currentPosts;

  //change page
  // const paginate = (pageNumber) => setCurrentpage(pageNumber);
  const showMore=()=>{
  setPostsPerpage((prev)=>{
    return prev+6
  })
  }
  return (
    <>
      <div className="cards-wrapper">
        {filteredData.map((item) => (
          <Card key={item.id} value={item} />
        ))}
      </div>
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      /> */}

      <div className="showCont">
           <button onClick={showMore} className="showMore">Show More</button>
      </div>
   
    </>
  );
};

export default Home;
