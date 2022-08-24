import React from 'react'
import Table from '../Table/Table'
import "./Sectionapi.css"
function Sectionapi(){
   
    return (
        <div className='contsection2'>
            <div className='contoption'>
                <div>
                    <label htmlFor="cars">Show</label>
                    <select name="cars" id="cars">
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="500">500</option>
                        <option value="1000">100</option>
                    </select>
                    <span>Entries</span>
                </div>
                <div>
                    <input type="date" />
                </div>
            </div>
            {/* table */}
           <Table/>
        </div>
    )
}

export default Sectionapi