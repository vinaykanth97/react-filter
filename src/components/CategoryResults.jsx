import { useEffect, useState } from "react"
import Highlighter from "react-highlight-words";
import uuid from 'react-uuid';
export const CategoryResults = ({ speciesContextList, filteredSpecies, searchedWord, setfilteredSpecies, foundLength, setfoundLength }) => {
    let totalLists = speciesContextList.length
    useEffect(() => {
        speciesContextList.forEach((species) => species['id'] = uuid())
    }, [])


    useEffect(() => {
        let foundSpecies = filteredSpecies.filter(species => {
            let question = species.question.toLowerCase()
            // console.log(filteredSpecies)
            if (question.indexOf(searchedWord) !== -1) {
                species['found'] = true
                // setfoundLength(filteredSpecies.length)
            } else {
                species['found'] = false
            }

            return species
        })

        setfilteredSpecies(foundSpecies)
        let lengthFind = filteredSpecies.filter((species) => {
            return species.found === true
        })
        setfoundLength(lengthFind.length)

    }, [searchedWord])
    const [accordionActive, setaccordionActive] = useState(false)
    const AccordionHandler = (e, id) => {
        let openAcc = filteredSpecies.filter((accordion) => {
            if (accordion.id === id) {
                accordion['active'] = !accordion.active

            }
            return filteredSpecies
        })
        // console.log(openAcc)
        setfilteredSpecies(openAcc)
    }

    return (
        <div className="category-results">
            {filteredSpecies.map((species, index) => {
                return (
                    species.found && (
                        <div className={`faq`} key={index}>
                            <div className={`faq-wrap ${species.active ? 'active' : ''}`} onClick={(e) => AccordionHandler(e, species.id)}>
                                <div className="icon">
                                    <span className="line-1"></span>
                                    <span className="line-2"></span>
                                </div>
                                <h3>
                                    <Highlighter
                                        highlightClassName="highlight-title"
                                        searchWords={[searchedWord]}
                                        autoEscape={false}
                                        textToHighlight={species.question}
                                    />
                                </h3>
                            </div>

                            {/* <h3>{species.question}</h3> */}
                            <p className={`${species.active ? 'd-block' : ''}`}>{species.answer}</p>
                        </div>
                    )

                )
            })}
            Showing result {foundLength} of {totalLists}
        </div>
    )
}
