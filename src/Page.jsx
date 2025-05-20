
import React from 'react';

const Page=({currentPage, totalPages, previous, next})=>{
    return(
        <div style={{display:'flex', justifyContent:"space-around", alignItems:'center', width:300}}>
            <button id="Previous"onClick={previous} disabled={currentPage === 1}>Previous</button>
            <h3>{currentPage}</h3>
            <button id='Next' disabled={currentPage === totalPages} onClick={next}>Next</button>


        </div>
    )

}
export default Page;