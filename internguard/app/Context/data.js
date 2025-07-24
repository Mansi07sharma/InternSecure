"use client";

import { createContext,useState,useContext} from "react";

const DataContext = createContext();
export const DataProvider=({children})=>{
    const [geminiData,setGeminiData]=useState({});
    const [whoisData,setWhoisData]=useState({});
    
    const fetchData=async(desc,domain)=>{
        const geminiRes=await fetch('/api/gemini',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({desc})
        })

        const Data=await geminiRes.json();
        setGeminiData(Data);

        const whoisData=await fetch('/api/whois',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({domain})
        })

        const Data2=await whoisData.json();
        setWhoisData(Data2);
    }

    return(
        <DataContext.Provider value={{geminiData,whoisData,fetchData}}>{children}</DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)