import { createContext, useState } from "react"

export const TextContext = createContext()

export default function Text({children}){
    const [weatherData,setWeatherData] = useState()

    return(
        <TextContext.Provider value={{weatherData,setWeatherData}}>
            {children}
        </TextContext.Provider>
    )
}