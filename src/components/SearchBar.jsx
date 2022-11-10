import React, { useContext } from 'react'
import { SpeciesContext } from './ContextDataSearch'

export default function SearchBar() {

    const speciesContextList = useContext(SpeciesContext)
    const SearchHandler = (e) => {
        let keyValue = e.target.value.toLowerCase()
        speciesContextList.setsearchedWord(keyValue)   
    }
    return (
        <form className='searchbox'>
            <input type="search" placeholder='Type a question or topic' onInput={SearchHandler} />
        </form>
    )
}
