import { useState, useEffect } from "react"
export const useDebounce = (value:string | number | object, delay:number) => {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedValue(value)
        },delay);
        return ()=>{
            clearTimeout(timer)
        }
    },[value, delay]);

    return debouncedValue
}