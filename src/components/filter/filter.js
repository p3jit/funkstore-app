import React from 'react'
import "./filter.css"

function Filter({setSort}) {

  return (
    <>
      <div className='filter-container d-flex py-3 px-2'>
          <h5>SORT BY:</h5>
          <select name="sort-select" id="sort-select" className='mx-2 mb-1' onChange={(e)=>{setSort(e.target.value)}}> 
              <option value="asc">PRICE (ASC)</option>
              <option value="desc">PRICE (DESC)</option>
          </select>
      </div>
    </>
  )
}

export default Filter