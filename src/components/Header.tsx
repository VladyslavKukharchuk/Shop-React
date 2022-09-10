import React from 'react';
import './Header.scss';
import { Outlet, Link } from 'react-router-dom';

import { Api, ShopAPI } from '../api/Api';


//імпорт для Firebase + Redux-Toolkit
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slice/userSlice';
//імпорт для Firebase + Redux-Toolkit


function Header(props: any) {
  Api(ShopAPI + `/products`);
  // Api(ShopAPI + `/products`, `POST`, {
  //     "title": "Aircraft Carrier",
  //     "img": "aircraft-carrier",
  //     "price": 30000,
  //     "sale": true,
  //     "salePercent": 2,
  //     "categories": [
  //         "Boat"
  //     ]
  // });
  Api(ShopAPI + `/categories`);
  // Api(ShopAPI + `/categories`, `POST`, {
  //     "name": "Boat"
  //     });
  Api(ShopAPI + `/users`);
  // Api(ShopAPI + `/users`, `POST`, {
  //     "name": "Ivan",
  //     "email": "ivan@gmail.com",
  //     "password": "123",
  //     "favourites": [
  //         "9",
  //         "18",
  //         "7"
  //     ],
  //     "status": false,
  //     "id": "1"
  // });
  // Api(ShopAPI + `/users${.id}`, `DELETE`);

  // const PRODUCTS = [
  //     {
  //         "title": "Aircraft Carrier",
  //         "img": "aircraft-carrier",
  //         "price": 30000,
  //         "sale": true,
  //         "salePercent": 2,
  //         "categories": [
  //             "Boat"
  //         ],
  //         "id": "1"
  //     },
  //     {
  //         "title": "Boat",
  //         "img": "boat",
  //         "price": 700,
  //         "sale": false,
  //         "salePercent": 0,
  //         "categories": [
  //             "Boat"
  //         ],
  //         "id": "2"
  //     },
  //     {
  //         "title": "Bus",
  //         "img": "bus",
  //         "price": 300,
  //         "sale": true,
  //         "salePercent": 10,
  //         "categories": [
  //             "Bus"
  //         ],
  //         "id": "3"
  //     },
  //     {
  //         "title": "Cabriolet",
  //         "img": "cabriolet",
  //         "price": 900,
  //         "sale": true,
  //         "salePercent": 25,
  //         "categories": [
  //             "Car"
  //         ],
  //         "id": "4"
  //     },
  //     {
  //         "title": "Commercial Plane",
  //         "img": "commercial-plane",
  //         "price": 1000,
  //         "sale": false,
  //         "salePercent": 51,
  //         "categories": [
  //             "Aircraft"
  //         ],
  //         "id": "5"
  //     },
  //     {
  //         "title": "Electric car",
  //         "img": "electric-car",
  //         "price": 3000,
  //         "sale": false,
  //         "salePercent": 0,
  //         "categories": [
  //             "Car"
  //         ],
  //         "id": "6"
  //     },
  //     {
  //         "title": "Helicopter police",
  //         "img": "helicopter-police",
  //         "price": 1000,
  //         "sale": true,
  //         "salePercent": 15,
  //         "categories": [
  //             "Aircraft",
  //             "Helicopter"
  //         ],
  //         "id": "7"
  //     },
  //     {
  //         "title": "Helicopter",
  //         "img": "helicopter",
  //         "price": 900,
  //         "sale": true,
  //         "salePercent": 35,
  //         "categories": [
  //             "Aircraft",
  //             "Helicopter"
  //         ],
  //         "id": "8"
  //     },
  //     {
  //         "title": "Minibus",
  //         "img": "minibus",
  //         "price": 700,
  //         "sale": true,
  //         "salePercent": 5,
  //         "categories": [
  //             "Car",
  //             "Bus"
  //         ],
  //         "id": "9"
  //     },
  //     {
  //         "title": "Motorbike",
  //         "img": "motorbike",
  //         "price": 200,
  //         "sale": true,
  //         "salePercent": 25,
  //         "categories": [
  //             "Bike"
  //         ],
  //         "id": "10"
  //     },
  //     {
  //         "title": "Off Road",
  //         "img": "off-road",
  //         "price": 600,
  //         "sale": false,
  //         "salePercent": 0,
  //         "categories": [
  //             ""
  //         ],
  //         "id": "11"
  //     },
  //     {
  //         "title": "Police Car",
  //         "img": "police-car",
  //         "price": 100,
  //         "sale": false,
  //         "salePercent": 0,
  //         "categories": [
  //             "Car"
  //         ],
  //         "id": "12"
  //     },
  //     {
  //         "title": "School Bus",
  //         "img": "school-bus",
  //         "price": 150,
  //         "sale": true,
  //         "salePercent": 8,
  //         "categories": [
  //             "Bus"
  //         ],
  //         "id": "13"
  //     },
  //     {
  //         "title": "Scooter",
  //         "img": "scooter",
  //         "price": 80,
  //         "sale": true,
  //         "salePercent": 13,
  //         "categories": [
  //             "Bike"
  //         ],
  //         "id": "14"
  //     },
  //     {
  //         "title": "Small Plane",
  //         "img": "small-plane",
  //         "price": 3000,
  //         "sale": false,
  //         "salePercent": 0,
  //         "categories": [
  //             "Aircraft"
  //         ],
  //         "id": "15"
  //     },
  //     {
  //         "title": "Speed Boat",
  //         "img": "speed-boat",
  //         "price": 2000,
  //         "sale": true,
  //         "salePercent": 34,
  //         "categories": [
  //             "Boat"
  //         ],
  //         "id": "16"
  //     },
  //     {
  //         "title": "Sport Car",
  //         "img": "sport-car",
  //         "price": 10000,
  //         "sale": true,
  //         "salePercent": 3,
  //         "categories": [
  //             "Car"
  //         ],
  //         "id": "17"
  //     },
  //     {
  //         "title": "Suv",
  //         "img": "Suv",
  //         "price": 300,
  //         "sale": true,
  //         "salePercent": 13,
  //         "categories": [
  //             "Car",
  //             "Bus"
  //         ],
  //         "id": "18"
  //     }
  // ];

  // const USERS = [
  //     {
  //         "name": "Ivan",
  //         "email": "ivan@gmail.com",
  //         "password": "123",
  //         "favourites": [
  //             "9",
  //             "18",
  //             "7"
  //         ],
  //         "status": false,
  //         "id": "1"
  //     }
  // ];


  // localStorage.setItem(`users`, JSON.stringify(USERS));

  // localStorage.setItem(`products`, JSON.stringify(PRODUCTS));

  const dispatch = useDispatch();

  const { isAuth, email} = useAuth();


  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container">
            <Link to="/">
              <img src="images/logo.png" alt="logo" height="45" />
            </Link>
            <div className="header__info">
              Hi,
              {isAuth ?
                <Link to="/favorites" className="header__user" id="headerUser">
                  {email}
                </Link>
                :
                <Link to="/login" className="header__user" id="headerUser">
                  Log in
                </Link>
              }
              <div className="header__shop">
                <Link to={isAuth ? "/favorites" : "/login"} id="headerFavourites">
                  <img src="images/favourite.png" alt="favourite" height="20" />
                  <span className="header__shop--count" id="headerFavouritesCount">
                    0
                  </span>
                </Link>
              </div>
              {isAuth &&
                <Link to="/login" className= "header__logout" id="headerLogout"
                  onClick={() => dispatch(removeUser())
                  }
                >
                  Log out
                </Link>
              }
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;