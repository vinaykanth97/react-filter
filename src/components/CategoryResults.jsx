import { useEffect, useRef, useState, createRef } from "react"
import Highlighter from "react-highlight-words";
import uuid from 'react-uuid';
export const CategoryResults = ({ speciesContextList, filteredSpecies, searchedWord, setfilteredSpecies, foundLength, setfoundLength, answerRef }) => {
    let totalLists = speciesContextList.length

    filteredSpecies.forEach((species) => species['identity'] = uuid())


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


    const AccordionHandler = (e, id) => {

        let openAcc = filteredSpecies.filter((accordion, index) => {
            if (accordion.identity === id) {
                accordion['active'] = !accordion.active
                if (accordion.active) {
                    answerRef.current[index].style.height = 'auto'
                    let maxHeight = answerRef.current[index].clientHeight + "px"
                    answerRef.current[index].style.height = 0 + 'px'
                    setTimeout(function () {
                        answerRef.current[index].style.height = maxHeight
                    }, 200);
                } else {
                    answerRef.current[index].style.height = 0 + 'px'
                }

            }
            return filteredSpecies
        })

        setfilteredSpecies(openAcc)

    }
    useEffect(() => {
        // if (accordion.active) {
        //     answerRef[index].current.style.height = 'auto'
        //     let maxHeight = answerRef[index].current.clientHeight + "px"
        //     answerRef[index].current.style.height = 0 + 'px'
        //     setTimeout(function () {
        //         answerRef[index].current.style.height = maxHeight
        //     }, 200);
        // } else {
        //     answerRef[index].current.style.height = 0 + 'px'
        // }
        console.log(answerRef)
    }, [])
    return (
        <div className="category-results">
            {filteredSpecies.map((species, index) => {
                return (
                    species.found && (
                        <div className={`faq`} key={index}>
                            <div className={`faq-wrap ${species.active ? 'active' : ''}`} onClick={(e) => AccordionHandler(e, species.identity)}>
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


                            {/* <p ref={answerRef} style={species.active ? { height: "200px" } : { height: "0" }}>{species.answer}</p> */}
                            <p ref={element => (answerRef.current[index] = element)}>{species.answer}</p>
                        </div>
                    )

                )
            })}
            Showing result {foundLength} of {totalLists}
        </div>
    )
}
