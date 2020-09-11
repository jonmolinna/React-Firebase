import React from 'react';
import Banner from './Banner';
import Card from './Card';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Experiencias en línea"
                    description="Únete a anfitriones únicos que ofrecen actividades interactivas únicas sin salir de casa."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Alojamientos unicos"
                    description="Espacios que son mucho mas que un lugar para dormir"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Alojamientos enteros"
                    description="Lugares privados, comodos y con espacio para amigos o familiares"
                />
            </div>
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/93c7bab1-2e0e-40e6-912d-5c0d9313471b.jpg?aki_policy=large"
                    title="Mini apartamento con terraza vista al mar en Punta"
                    description="Estamos ubicados en la urbanización miramar a pocos metros de playa blanca"
                    price="S/73/noche"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/a7a14f8d-6ee5-4676-af23-c1e57262afff.jpg?aki_policy=large"
                    title="Bungalo Suit para dos, Río, Sol y Campo"
                    description="Hermoso Lugar para alejarse de la ciudad y gozar de la La Paz y la Armonía"
                    price="S/425/noche"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/5e2e1962-4386-43d9-a0be-5ed4479a01aa.jpg?aki_policy=large"
                    title="Habitación amplia con baño y kitchen en Miraflores"
                    description="Habitación confortable, iluminada y equipada con cama matrimonial, mesa de noche"
                    price="S/50/noche"
                />
            </div>
        </div>
    )
}

export default Home;