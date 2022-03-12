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

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });


    //Executar algo na instanciação ou destruição do componente, observar estado
    //Recebe dois argumentos uma função a ser executada, e uma lista de objetos para um listner
    //&sort=id = ordernar a busca por id
    useEffect(() => {

        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`).then(resposta => {
            const data = resposta.data as MoviePage;
            setPage(data);

            //setPageNumber(data.number);
            //console.log(resposta.data);
        })
    }, [pageNumber]);

    //NOTA: em uma renderização dinâmica de coleção, cada elemento renderizado DEVE possuir um atributo key
    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    {page.content.map(movie =>
                    (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing;