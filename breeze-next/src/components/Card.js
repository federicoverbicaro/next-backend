"use client"

import { useState, useEffect } from 'react';


export default function Card() {
    const [contenuti, setContenuti] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/google-content')
            console.log(response)

            const data = await response.json()
            setContenuti(data)

        }
        fetchData()
    }, [])




    return (
        <div className='flex justify-center flex-wrap gap-2'>
            {contenuti.length > 0 ? (
                contenuti.map((contenuto, index) => (
                    <div className="flex flex-col justify-center text-center p-5 border-black border rounded-md" key={index}>
                        <h1 className='font-bold'>{contenuto.titolo}</h1>
                        <p>{contenuto.descrizione}</p>
                    </div>
                ))) : (<div></div>)}
        </div>
    )
}
