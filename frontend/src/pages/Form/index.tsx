import FormCard from 'components/FormCard';
import { Link, useParams } from 'react-router-dom';
import { Movie } from 'types/movie';

function Form( ) {

    const params = useParams();

    return (
        //movieId foi pego na rota, em app.tsx
       <FormCard movieId={`${params.movieId}`} />
    );
}

export default Form;