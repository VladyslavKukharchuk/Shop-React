import React from 'react';
import './Category.scss';
import Product from './Product';

function Category(props: any) {

    return (
        <div className="container" id="categoriesContainer">
            <section className="category" data-name="Boat">
                <h2>Boat</h2>
                <div className="category__container">
                    <Product
                        product={{
                            "title": "Aircraft Carrier",
                            "img": "aircraft-carrier",
                            "price": 30000,
                            "sale": true,
                            "salePercent": 2,
                            "categories": [
                                "Boat"
                            ],
                            "id": "1"
                        }}
                    />
                    <Product
                        product={{
                            "title": "Boat",
                            "img": "boat",
                            "price": 700,
                            "sale": false,
                            "salePercent": 0,
                            "categories": [
                                "Boat"
                            ],
                            "id": "2"
                        }}
                    />
                </div>
            </section>
            <section className="caterory" data-name="Bus">
                <h2>Bus</h2>
                <div className="category__container">
                    <Product
                        product={{
                            "title": "Bus",
                            "img": "bus",
                            "price": 300,
                            "sale": true,
                            "salePercent": 10,
                            "categories": [
                                "Bus"
                            ],
                            "id": "3"
                        }}
                    />
                </div>
            </section>
            <section className="caterory" data-name="Car">
                <h2>Car</h2>
                <div className="category__container">
                    <Product
                        product={{
                            "title": "Cabriolet",
                            "img": "cabriolet",
                            "price": 900,
                            "sale": true,
                            "salePercent": 25,
                            "categories": [
                                "Car"
                            ],
                            "id": "4"
                        }}
                    />
                </div>
            </section>
            <section className="caterory" data-name="Aircraft">
                <h2>Aircraft</h2>
                <div className="category__container">
                    <Product
                        product={{
                            "title": "Commercial Plane",
                            "img": "commercial-plane",
                            "price": 1000,
                            "sale": false,
                            "salePercent": 51,
                            "categories": [
                                "Aircraft"
                            ],
                            "id": "5"
                        }}
                    />
                </div>
            </section>
            <section className="caterory" data-name="Helicopter">
                <h2>Helicopter</h2>
                <div className="category__container">
                    <Product
                        product={{
                            "title": "Helicopter police",
                            "img": "helicopter-police",
                            "price": 1000,
                            "sale": true,
                            "salePercent": 15,
                            "categories": [
                                "Aircraft",
                                "Helicopter"
                            ],
                            "id": "7"
                        }}
                    />
                </div>
            </section>
            <section className="caterory" data-name="Bike">
                <h2>Bike</h2>
                <div className="category__container">
                    <Product
                        product={{
                            "title": "Motorbike",
                            "img": "motorbike",
                            "price": 200,
                            "sale": true,
                            "salePercent": 25,
                            "categories": [
                                "Bike"
                            ],
                            "id": "10"
                        }}
                    />
                </div>
            </section>
        </div>
    );
}

export default Category;