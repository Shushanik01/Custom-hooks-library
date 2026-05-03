import { useEffect, useState } from "react"

export const useMediaQuery = (query:string)=>{

    const [mediaQuery, setMediaQuery] = useState(false);

    useEffect(()=>{
        const media = window.matchMedia(query);

        setMediaQuery(media.matches);

        const handler = ()=>{
            setMediaQuery(media.matches)
        };

        media.addEventListener('change', handler)

        return ()=>{
            media.removeEventListener("change", handler)
        }

    },[query]);

    return mediaQuery
}