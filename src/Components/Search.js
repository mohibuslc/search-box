import React from 'react';
import {useState, useEffect} from 'react';



const Search = () => {

    const [search , setSearch]= useState([]);
    const [api , setApi]= useState ([]);
    useEffect(()=>{



        fetch(`https://restcountries.eu/rest/v2/name/${search}`)
        .then(res => res.json())
        .then(data => setApi(data))
    },[search])


    const handleChange = event=>{

        console.log(event.target.value);

        setSearch(event.target.value)

        
    }
    return (
        <div>

            <h1>Search Box </h1>


            <input type = "text" onChange ={handleChange} placeholder="Search Box" />
            <h2>Api Length : {api?.length}</h2>
            {

                api?.map(apis => <li>{apis.name}</li>)
            }
            
        </div>
    );
};

export default Search;