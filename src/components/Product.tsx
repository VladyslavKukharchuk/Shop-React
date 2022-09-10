import React from 'react';
import './Product.scss';

function product(props: any) {
    return (
        <div className="product">
            <img
                src={`images/products/${props.product.img}.png`}
                className="product__img"
                alt={props.title}
                height="80"
            />
            <p className="product__title">{props.product.title}</p>
            {props.product.sale ?
                (<><div className="product__sale">
                    <span className="product__sale--old">${props.product.price}</span>
                    <span className="product__sale--percent">-{props.product.salePercent}%</span>
                </div>
                <div className="product__info">
                    <span className="product__price">${props.product.price - (props.product.price * props.product.salePercent / 100)}</span>
                </div>
                </>)
                :
                (<div className="product__info">
                    <span className="product__price">${props.product.price}</span>
                </div>)
            }
            <button className="product__favourite">
                <img
                    src="images/product__favourite.png"
                    alt="favourite"
                    height={20}
                />
            </button>
        </div>
    );
}

export default product;