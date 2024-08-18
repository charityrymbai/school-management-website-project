import { useNavigate } from 'react-router-dom';

export const useBaseNavigate = (basePath) => {
     const navigate = useNavigate();

     return (path) => {
          navigate(`${basePath}/${path}`);
     };
};
