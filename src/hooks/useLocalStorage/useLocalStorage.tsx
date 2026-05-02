import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue?: T ){
        const [Storagedata, setStoragedata] = useState(()=> {
            const stored = localStorage.getItem(key)
            return stored ? JSON.parse(stored) : initialValue
        });

        
        useEffect(()=>{
            localStorage.setItem(key, JSON.stringify(Storagedata))
        },[key, Storagedata])        
      

       return [Storagedata, setStoragedata] as const
}