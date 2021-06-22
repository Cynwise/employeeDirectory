import React from 'react';

const search = (props) => {

    const handleChange = (e) => {

        props.handleSearch(e.target.value)
    }

    return (
        <div style = {{margin: "3vw 24vw 3vw 24vw"}}>
          <form>
            <input onChange = {handleChange} style = {{width: "50vw"}} placeholder="Search..." name="search" type="search" className="form-control-lg search-font mx-auto"/>
          </form>
        </div>
      );
}

export default search