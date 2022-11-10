import { createContext, useRef, useState } from "react";
import speciesData from '../api/SearchDatas.json'
export const SpeciesContext = createContext();

export const SpeciesProvider = ({ children }) => {
    let egList = speciesData.slice(0, 3)
    const [filteredSpecies, setfilteredSpecies] = useState([...egList])
    const [searchedWord, setsearchedWord] = useState('')
    const [foundLength, setfoundLength] = useState()
    const answerRef = useRef([])
    return (
        <SpeciesContext.Provider value={{ speciesData, filteredSpecies, setfilteredSpecies, searchedWord, setsearchedWord, setfoundLength, foundLength, answerRef }}>
            {children}
        </SpeciesContext.Provider>
    )
}