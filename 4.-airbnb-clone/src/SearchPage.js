import React from 'react';
import "./SearchPage.css";
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>
            </div>
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/42872024-f77a-400b-95f8-25668773cf0c.jpg?aki_policy=large"
                location="Pisco, Paracas, Perú"
                title="Beachfront Bungalow Paracas"
                description="4 huéspedes · 2 habitaciones · 3 camas · 2 baños"
                star={4.78}
                price="S/177/noche"
                total="S/220 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/42872024-f77a-400b-95f8-25668773cf0c.jpg?aki_policy=large"
                location="Pisco, Paracas, Perú"
                title="Beachfront Bungalow Paracas"
                description="4 huéspedes · 2 habitaciones · 3 camas · 2 baños"
                star={4.78}
                price="S/177/noche"
                total="S/220 total"
            />
        </div>
    )
}

export default SearchPage;