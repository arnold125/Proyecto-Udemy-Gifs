import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {

        //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
        const [categories, setCategories] = useState(['The Big Bang Theory']);

        /* const handleAdd = () => {
             //setCategories(['Digimon', ...categories]);
             setCategories(cats => [...cats,'HunterXHunter'])
         };*/

        return (
            <>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories}/>
                <hr/>
                {/*<button onClick={handleAdd}>Agregar</button>*/}
                <ol>
                    {
                        categories.map(category => (
                            // return <li key={category}>{category}</li>
                            <GifGrid
                                key={category}
                                category={category}
                            />
                        ))
                    }
                </ol>
            </>
        );
    }
;