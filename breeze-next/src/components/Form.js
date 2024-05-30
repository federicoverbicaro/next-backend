"use client"

import { useState } from "react"

export default function Form(){

const [formData, setFormData] = useState({
    email: "",
    nome: "",
    messaggio: "",
});

const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]:value,
    }))
console.log(e.target.name)
console.log(e.target.value)
}

const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        console.log('Data saved successfully:', formData);

        setFormData({
          email: "",
          nome: "",
          messaggio: "",
        });
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };




return(
    <form className="flex flex-col gap-10 w-4/12 m-auto " onSubmit={handleSubmit}>
        <label className="flex flex-col">Email
            <input type="email" name="email" value={formData.email} onChange={handleChange}></input>
        </label>

        <label className="flex flex-col">Nome
            <input type="text" name="nome" value={formData.nome} onChange={handleChange}></input>
        </label>

        <label className="flex flex-col">Messaggio
            <textarea name="messaggio" value={formData.messaggio} onChange={handleChange}></textarea>
        </label>


        <button className="border bg-blue-500 rounded-lg text-white " type="submit" >Invia</button>
    </form>
)
}
