import React from 'react';
import Favourite from '../components/Favourite';

//переадресація при неавторизованому користувачі
import {Navigate} from 'react-router-dom';
import {useAuth} from '../hooks/use-auth';
//переадресація при неавторизованому користувачі

function Favourites() {

  const {isAuth} = useAuth();

    return isAuth ? (
        <main>
            <Favourite />
        </main>
    ) : (
        <Navigate to= "/login" />
    );
}

export default Favourites;