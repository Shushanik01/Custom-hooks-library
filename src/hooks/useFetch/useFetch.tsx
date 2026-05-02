import { useEffect, useState } from "react"


export const usefetch = (URL: string) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | undefined>()

    useEffect(() => {
        const controller = new AbortController();

        const startLoad = async () => {
            try {
                setLoading(true);

                const req = await fetch(URL,{
                    signal: controller.signal
                })

                if (!req.ok) {
                    throw new Error(`Error ${(await req).status}`);

                }
                let res = await req.json();
                setData(res);
            } catch (error) {
                if((error as Error).name === 'AbortError') return
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }
        startLoad();

        return () => {
            controller.abort()
        }
    }, [URL])
    return { data, loading, error }
}