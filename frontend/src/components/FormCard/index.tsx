import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import { validateEmail } from 'utils/validate';
import './styles.css'

type Props = {
    movieId: string;
}

function FormCard({movieId}:Props ) {

    const [movie, setMovie] = useState<Movie>();

    //Serve para dar um comando de redirecionamento de rota
    const navigate = useNavigate();

    //.then, quando a requisição chegar
    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
        .then(response => {
            setMovie(response.data);
        });

        //[movieId = para que ele so refaça a operação quando o id sofrer alteração]
    }, [movieId]);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        //evitar o recarregamento padrão da tela
        event.preventDefault();

        //capturar os dados digitados
        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;
        
        if(!validateEmail(email)){
            return;
        }

        //configuração para realizar um put no banco de dados
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        //Put no banco de dados
        axios(config).then( response => {
            //console.log(response.data);
            navigate("/");
        })

    }


    //colocar a interrogação para que o compilador não reclame, se tiver o movie ok se nao fica null msm
    //? = opcional
    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="dsmovie-form" onSubmit={ handleSubmit }>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                   <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button> 
                </Link>
                
            </div >
        </div >
    );
}

export default FormCard;