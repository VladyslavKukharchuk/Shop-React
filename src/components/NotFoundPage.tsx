import React from 'react';
import './NotFoundPage.scss';

//Для переадресації при натисканні
import { useNavigate } from 'react-router-dom';
//Для переадресації при натисканні

function NotFoundPage() {
    //хук для переадресації
    const navigate = useNavigate();
    //хук для переадресації

    return (
        <main>
            <div className="container">
                <div className="page404">
                    <div className="page404__title">
                        <img src="images/Image_404.gif" alt='image "something went wrong"' />
                    </div>
                    <div className="page404__info">
                        <h2>Look like you're lost</h2>
                        <p>the page you are looking for not avaible!</p>
                        <button onClick={() => { navigate('/') }} className="btn">
                            Go to Home
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NotFoundPage;