import React, { useContext } from 'react'
import { Categories } from './Categories'
import { CategoryResults } from './CategoryResults'
import { SpeciesContext } from './ContextDataSearch'

export const OverallResults = () => {
    const speciesContextList = useContext(SpeciesContext)

    return (
        <div className='overall-results'>
            <Categories speciesContextList={speciesContextList.speciesData} filteredSpecies={speciesContextList.filteredSpecies} setfilteredSpecies={speciesContextList.setfilteredSpecies} searchedWord={speciesContextList.searchedWord} setfoundLength={speciesContextList.setfoundLength} />
            <CategoryResults speciesContextList={speciesContextList.speciesData} filteredSpecies={speciesContextList.filteredSpecies} setfilteredSpecies={speciesContextList.setfilteredSpecies} searchedWord={speciesContextList.searchedWord} foundLength={speciesContextList.foundLength} setfoundLength={speciesContextList.setfoundLength} />
        </div>
    )
}
