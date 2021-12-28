import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css' 

export const MultipleCustomHooks = () => {
    const[counter, increment,decrement,reset] = useCounter(1);
    const {loading,data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const { author='', quote=''} = (!!data && data[0])|| {};

    return (
        <div>
            <h1>
                BreakingBad Quotes
            </h1>
                <hr/>
                { loading ? 
                    <div className="alert alert-info text-center">Loading....</div>
                    :
                    <>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{author}</h5>
                                <hr/>
                                <p className="card-text">{quote}</p>
                            </div>
                        </div>
                        {counter>1 && <button 
                            className="btn btn-primary"
                            onClick={decrement}
                        > anterior </button>}
                        <button 
                            className="btn btn-primary"
                            onClick={reset}
                        >inicial</button>
                        
                        <button 
                            className="btn btn-primary"
                            onClick={increment}
                        >siguiente</button>
                    </>
                }

                
        </div>
    )
}
