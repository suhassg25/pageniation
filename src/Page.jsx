import Button from '@mui/material/Button'
import React from 'react';

const Page=({currentPage, totalPages, previous, next})=>{
    return(
        <div style={{display:'flex', justifyContent:"space-around", alignItems:'center', width:300}}>
            <Button variant='contained' onClick={previous} disabled={currentPage === 1}> Previous </Button>
            <Button>{currentPage}</Button>
            <Button variant='contained' disabled={currentPage === totalPages} onClick={next}> Next </Button>


        </div>
    )

}
export default Page;