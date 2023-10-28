import { React, useEffect } from 'react';
import { Link } from "react-router-dom";


import ImageProjectA4 from '../Style/Images/Project/Exterior-0.jpg';
import ImageProjectB3 from '../Style/Images/Project/City-0.jpg';
// import ImageProjectC1 from '../Style/Images/Project/Interior-1-1.jpg';
import ImageProjectC7 from '../Style/Images/Project/Interior-1-2.jpg';
import ImageProjectD1 from '../Style/Images/Project/NFT-1.jpg';
// import ImageProjectE7 from '../Style/Images/Project/Pharmacie-3.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectG2 from '../Style/Images/Project/MSAD_2.jpg';
import ImageProjectL1 from '../Style/Images/Project/Villa_Teranga_Al_Amin-1.jpg';
import ImageProjectJ1 from '../Style/Images/Project/Villa_B-2.jpg';

import ImageProjectM1 from '../Style/Images/Project/ProductA-1.jpg';

import ImageProjectN1 from '../Style/Images/Project/ProductB-1.jpg';



function Services() {

    useEffect(() => {
        let ToDisplayonBLoade = document.querySelector(".before-loader")
        ToDisplayonBLoade.style.display = 'none';

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.top = `-300%`

        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';


        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);

        let TheFooter = document.querySelector(".the_footer")
        TheFooter.style.opacity = '1';

        return () => {
            ToDisplayonBLoade.style.display = 'flex';
            AccueilContainer.scrollTop = 0;
        }

    }, []);

    return (
        <div id="Services">

            <section className='Services-Header'>
                <h1 className='visualization-projects'>
                    Nos Services
                </h1>
                <p className='visualization-projects-description'>
                    Nous nous efforçons de créer des expériences RV et des visuels de haute qualité qui plongent les utilisateurs dans des environnements saisissants, réalistes et captivants.
                </p>
            </section>
            <OneService theServiceTitle={'Visualisations 3D "Rendus Images et Animations"'}
                theServiceDescription={
                    <p>
                        Nos services en conception Visualisations 3D comprennent la création d'images fixes et d'animations. Grâce à ceux-ci, nous aidons nos clients à transmettre leur vision et à façonner les environnements de demain.
                    </p>
                }
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectA4} title={'Design de Maison Moderne'} link={'/SmallHouse1'} date={'15 avril, 2022'} />
                        <OneGalerieElement image={ImageProjectB3} title={"Cité El Hadj Amadou BA"} link={"/City1"} date={'27 Mai, 2022'} />
                        <OneGalerieElement image={ImageProjectC7} title={'Interior Design'} link={'/Interior1'} date={'03 Juin, 2022'} />
                    </div>
                } color={'#000'}
            />
            <OneService
                theServiceTitle={'Visualisation 3D De Produits'}
                theServiceDescription={
                    <p>
                        Cette technique offre de nombreux avantages pour différentes industries, en leur permettant de mieux visualiser, de présenter et de commercialiser leurs produits.
                    </p>}
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectM1} title={'Visualisations De Produits Produit De Beauté'} link={'/ProduitsA'} date={'27 Mai, 2022'} />
                        <OneGalerieElement image={ImageProjectN1} title={'Visualisations Tapie De Souris Gamer( Wraptor Gaming)'} link={'/ProduitsB'} date={'23 Décembre, 2022'} />
                    </div>
                } color={'#000'}
            />
            <OneService
                theServiceTitle={'Réalité Virtuel et Experience 3D Web'}
                theServiceDescription={
                    <p>
                        Nous donnons plus de vie à vos projets immobiliers avec la technique de réalité virtuelle en produisant des rendus 3D immersifs permettant de visiter les espaces comme si vous y étiez.
                    </p>}
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectJ1} title={'Villa Saly'} link={'/Villa-Saly'} date={'06 Juin, 2023'} />
                        <OneGalerieElement image={ImageProjectG2} title={'Manufacture des Arts Décoratifs de Thiés'} link={'/MSAD'} date={'03 Septembre, 2022'} />
                        <OneGalerieElement image={ImageProjectL1} title={'Villa Al Amin'} link={'/VillaTerangaAlAmin'} date={'26 Janvier, 2023'} />
                    </div>
                } color={'#000'}
            />
            <OneService
                theServiceTitle={'Création de Maquettes'}
                theServiceDescription={
                    <p>
                        Le rendu et l'animation avec des temps de production de plus en plus rapide ont ouvert la porte à un monde de variations infinies dans la conception graphique adaptée à vos demandes uniques.
                    </p>}
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectD1} title={'Maquette de la Grande Mosquée de Touba'} link={'/Touba'} date={'09 Mars, 2022'} />
                        <OneGalerieElement image={ImageProjectF2} title={'Maquette "Hangar Photovoltaïque"'} link={'/Hangar1'} date={'29 Juin , 2021'} />
                    </div>
                } color={'#000'}
            />
        </div>
    );
}



function OneService({ color, theServiceTitle, TheGalerieElements, theServiceDescription }) {
    return (
        <div
            style={{
                backgroundColor: color,
            }}
            className="one_service" >
            <h2 className='the_title'>
                {theServiceTitle}
            </h2>
            <div className='the_descrition'>
                {theServiceDescription}
            </div>
            {TheGalerieElements}
        </div >
    );
}


function OneGalerieElement({ giveImageId, title, theKey, image, date, link }) {

    return (
        <section className='one_galerie_element_container'>
            <div className='one_galerie_element'>
                <img src={image} width='100%' alt={title} />
                <div className='one_galerie_element_hover'>
                    <div className='iner_container' >
                        <Link className='titre' to={link}>
                            {title}
                        </Link>
                        <p className='date'>
                            {date}
                        </p>
                    </div>
                </div>
            </div>
            <Link className='one_galerie_link' to={link}>
                Voir le projet  <ion-icon name="arrow-forward-outline"></ion-icon>
            </Link>
        </section>
    );
}




export default Services;
