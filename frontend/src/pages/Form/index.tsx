import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';


function Form( ) {

    const params = useParams();

    return (
        //movieId foi pego na rota, em app.tsx
       <FormCard movieId={`${params.movieId}`} />
    );
}

export default Form;