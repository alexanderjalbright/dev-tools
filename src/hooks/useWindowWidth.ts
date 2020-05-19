import { useState, useEffect, useRef } from 'react'

const getCurrentWindowWidth = (): number =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

type UseWindowWidth = () => number

const useWindowWidth: UseWindowWidth = () => {
    const prevTimeout = useRef<number | undefined>(undefined)
    const [windowWidth, setWindowWidth] = useState<number>(
        getCurrentWindowWidth()
    )

    useEffect(() => {
        const onResize = () => {
            window.clearTimeout(prevTimeout.current)
            prevTimeout.current = window.setTimeout(
                () => setWindowWidth(getCurrentWindowWidth()),
                100
            )
        }

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return windowWidth
}

export default useWindowWidth
