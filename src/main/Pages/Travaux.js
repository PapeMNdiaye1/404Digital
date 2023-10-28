import { React, useEffect } from 'react';
import { OneBigProject } from './Accueil';

import ImageProjectA1 from '../Style/Images/Project/Exterior-1.jpg';
import ImageProjectC3 from '../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectD3 from '../Style/Images/Project/NFT-3.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectG1 from '../Style/Images/Project/MSAD_2.jpg';

import ImageProjectI2 from '../Style/Images/Project/Villa_B-2.jpg';

import ImageProjectL1 from '../Style/Images/Project/Villa_Teranga_Al_Amin-1.jpg';

import ImageProjectM1 from '../Style/Images/Project/ProductA-1.jpg';

import ImageProjectN1 from '../Style/Images/Project/ProductB-1.jpg';

import ImageProjectB1 from '../Style/Images/Project/City-1.jpg';




function Travaux() {

    useEffect(() => {
        console.log('opp Travaux');
        let ToDisplayonBLoade = document.querySelector(".before-loader")
        ToDisplayonBLoade.style.display = 'none';

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.top = `-100%`

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
            console.log(ToDisplayonBLoade);
            AccueilContainer.scrollTop = 0;
        };
    }, []);


    return (
        <div id="Travaux">
            <section className='Travaux-Header'>
                <h1 className='visualization-projects'>
                    Nos Réalisations
                </h1>
                <p className='visualization-projects-description'>
                    Notre mission est d'explorer les possibilités infinies offertes par la réalité virtuelle pour transformer la manière dont les individus travaillent, se divertissent et se connectent entre eux. Nous nous efforçons de créer des expériences RV de haute qualité qui plongent les utilisateurs dans des environnements virtuels saisissants, réalistes et captivants.                </p>

            </section>
            <section className='AccueilBigProjectsSection'>

                <OneBigProject title={'Villa Saly'} image={ImageProjectI2}
                    description={"Des designs Modernes, épurés, etc…. nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={1} The_Experience={true} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/Villa-Saly'} side={'left'} />

                <OneBigProject title={'Cité El Hadj Amadou BA'} image={ImageProjectB1}
                    description={"Ce projet comprend des villas familiales, des bâtiments commerciaux et résidentiels ainsi que des lieux publics. Notre travail se partage à parts égales entre les animations architecturales et les rendus 3D. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={2} link={'/City1'} side={'right'} The_Experience={false} />

                <OneBigProject title={'Visualisation de projets immobiliers'} image={ImageProjectL1}
                    description={"Les visites virtuelles offrent de nombreux avantages pour les acheteurs, propriétaires et agents immobiliers. Pour les acheteurs, elles permettent de visualiser les propriétés sans se déplacer. Pour les agents immobiliers, elles peuvent diffuser les propriétés à plus de gens, ce qui peut conduire à une vente plus rapide. Les visites virtuelles sont une solution pratique pour toutes les parties impliquées dans le processus immobilier."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={3} link={'/VillaTerangaAlAmin'} side={'left'}
                    The_Experience={true} The_Experience_Link={'https://archviz-villa-teranga-al-amine.netlify.app/'} />

                <OneBigProject title={'Décoration Interieur'} image={ImageProjectC3}
                    description={'À l\'aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur. Nous vous aidons dans l’aménagement de vos espaces.'}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={4} link={'/Interior1'} side={'right'} The_Experience={true} The_Experience_Link={'https://papemndiaye1.github.io/ArchViz_Interior_Design_1/'} />

                <OneBigProject title={`Visualisations De Produits Produit De Beauté`} image={ImageProjectN1}
                    description={"Mise en avant de produit à travers des supports modernes. branding , Pub , Animations..."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={5} link={'/ProduitsB'} side={'left'} The_Experience={false} />

                <OneBigProject title={'La 3D dans le domaine des Industries'} image={ImageProjectF2}
                    description={"Le rendu et l'animation avec des temps de production de plus en plus rapide ont ouvert la porte à un monde de variations infinies dans la conception graphique adaptée à vos demandes uniques."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={6} link={'/Hangar1'} side={'right'} The_Experience={false} />

                <OneBigProject title={'Design de Maison Moderne'} image={ImageProjectA1}
                    description={"Des designs Modernes, épurés, minimalistes etc.… nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={7} link={'/SmallHouse1'} side={'left'} The_Experience={false} />

                <OneBigProject title={'Visualisations 3D De Produits'} image={ImageProjectM1}
                    description={"Cette technique offre de nombreux avantages pour différentes industries, en leur permettant de mieux visualiser, de présenter et de commercialiser leurs produits."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={8} link={'/ProduitsA'} side={'right'} The_Experience={false} />

                <OneBigProject title={'Maquette de la Grande Mosquée de Touba'} image={ImageProjectD3}
                    description={'Sur la base du matériel de briefing, nous créons des rendus ou croquis pour chaque image commandée.'}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={9} link={'/Touba'} side={'left'} The_Experience={false} />


            </section>
        </div>
    );
}

export default Travaux;
