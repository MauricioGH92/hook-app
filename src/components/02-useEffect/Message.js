import React,{useEffect,useState} from 'react'

export const Message = () => {
    const [coordinate, setCoordinate] = useState({x:0,y:0})
    const {x,y} = coordinate;
    useEffect(() => {
        console.log('componente montado');
        
        const mouseMove = (e) => {
            setCoordinate({x:e.x, y:e.y});
            console.log(':D');
        }
        
         window.addEventListener('mousemove',mouseMove)
        return () => {
            window.removeEventListener('mousemove',mouseMove)

            console.log('componente desmontado');
        }
    }, [])
    return (
        <div>
            <h3>Las coordenadas son:{`X: ${x}  Y:${y}`}</h3>
        </div>
    )
}
