"use client"

import { useState } from "react"

export default function Form(){











return(
    <form className="flex flex-col gap-10 w-4/12 m-auto ">
        <label className="flex flex-col">Email
            <input type="email" name="email"></input>
        </label>

        <label className="flex flex-col">Nome
            <input type="text" name="nome"></input>
        </label>

        <label className="flex flex-col">Messaggio
            <textarea name="messaggio"></textarea>
        </label>


        <button className="border bg-blue-500 rounded-lg text-white " type="submit">Invia</button>

    </form>
)
}
