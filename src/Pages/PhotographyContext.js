import React, { createContext, useState, useContext } from 'react'

const initialValues = {
    
}

const PhotographyContext = createContext()

export const PhotographyProvider = ({ children }) => {

    const [photographyState, setPhotographyState] = useState(initialValues)

    const setValuesPhotographyState = (newDatas) => {
        setPhotographyState((prevData) => ({
            ...prevData,
            ...newDatas
        }))
    }

    const initValuesPhotographyState = () => {
        setPhotographyState(initialValues)
    }

    return (
        <PhotographyContext.Provider value={{ photographyState, setValuesPhotographyState, initValuesPhotographyState }}>
            { children }
        </PhotographyContext.Provider>
    )
}

export const usePhotographyState = () => useContext(PhotographyContext)