import { useState } from "react";

function SearchHeader({search}) {

    const [valueInput, setValueInput] = useState('')    

    const handleFormSubmit = (event) => {
        event.preventDefault(); // formun yenilenmesini engeller...
        search(valueInput);
    }

    const handeChange = (event) => {
        setValueInput(event.target.value)
    }
    

    return ( 
        <div className="searchDiv">
            <form className="searchForm" onSubmit={handleFormSubmit}>
                <label> Ne arıyorunuz? </label>
                <input value={valueInput} onChange={handeChange}/>
            </form>
        </div> 
    );
}

export default SearchHeader;