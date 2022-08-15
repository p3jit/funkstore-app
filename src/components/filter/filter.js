import React from 'react'
import "./filter.css"

function Filter() {
  return (
    <>
        <div className='filter-container d-flex py-3 px-2'>
            <h5>SORT BY:</h5>
            <select name="sort-select" id="sort-select" className='mx-2 mb-1'> 
                <option value="pasc">PRICE (ASC)</option>
                <option value="pdesc">PRICE (DESC)</option>
                <option value="rating">RATING</option>
            </select>
        </div>
    </>
  )
}

export default Filter