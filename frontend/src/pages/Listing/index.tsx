import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";


function Listing() {

    //Manter estado no componente
    //userStade sempre iniciar ele com um numero
    const [pageNumber, setPageNumber] = useState(0);

    //Executar algo na instanciação ou destruição do componente, observar estado
    //Recebe dois argumentos uma função a ser executada, e uma lista de objetos para um listner
    useEffect(() => {

        axios.get(`${BASE_URL}/movies?size=12&page=1`).then(resposta =>{

        console.log(resposta.data);
        const data = resposta.data as MoviePage;
        setPageNumber(data.number);

    })
    }, []);

    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </> 
    );
}

export default Listing;