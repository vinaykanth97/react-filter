

export const Categories = ({ speciesContextList, setfilteredSpecies, searchedWord, setfoundLength, filteredSpecies, answerRef }) => {
    const seen = new Set();
    let filteredSpeciesCategory = speciesContextList.filter((species) => {
        const duplicate = seen.has(species.id);
        seen.add(species.id);
        return !duplicate;
    })

    const FilterHandler = (e, index) => {

        let filteredModel = speciesContextList.filter((speciesList, i) => {


            return speciesList.category === index
        })
        if (searchedWord.length === 0) {
            speciesContextList.forEach(species => species['found'] = true)
        }



        setfilteredSpecies(filteredModel)
        setfoundLength(filteredModel.length)

        filteredSpecies.map((species, index) => {
            answerRef.current[index].style.height = ""
            species.active = false
        })
    }
    return (
        <ul className='category-filters'>
            {
                filteredSpeciesCategory.map((species, index) => {
                    return (
                        <li key={index} onClick={(e) => FilterHandler(e, species.category)}><svg className="catIcon" data-name="link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>link</title><path d="M10,19.5A9.51,9.51,0,0,1,.91,12.78h2a7.65,7.65,0,1,0-.46-3.71H10.3L8.49,7.25,9.8,5.94l2.88,2.88a1.67,1.67,0,0,1,0,2.36L9.8,14.06,8.49,12.75l1.81-1.82H.55c0-.3-.05-.61-.05-.92A9.5,9.5,0,1,1,10,19.5Z" transform="translate(-0.5 -0.5)"></path></svg>{species.category}</li>
                    )
                })
            }
        </ul>
    )
}
