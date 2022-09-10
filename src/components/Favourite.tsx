import React from 'react';
import './Favourite.scss';

function Favourite(props: any) {
    return (
        <div className="container">
            <div className="favourites__container">
                <div className="table__container">
                    <table className="order__table" id="favouriteTable">
                        <caption>Favourite Items</caption>
                        <thead>
                            <tr>
                                <th>Item Description</th>
                                <th>Price</th>
                                <th>Sale</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="item__info">
                                        <img src="images/products/boat.png" alt="Boat" height="100" />
                                        <div>
                                            <p className="item__info--title">Boat</p>
                                        </div>
                                    </div>
                                </td>
                                <td>$700</td>
                                <td>-</td>
                                <td>$700</td><td><button className="item__favourite"><img src="images/product__favourite--true.png" alt="favourite" height="20" /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Favourite;