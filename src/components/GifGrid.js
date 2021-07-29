import React from "react";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";
//import {getGis} from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    /*const [images, setImages] = useState([]);
    
    useEffect(() => {
        getGis(category)
            .then(setImages);
    }, [category]);*/

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className={'card-grid '}>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    );

};