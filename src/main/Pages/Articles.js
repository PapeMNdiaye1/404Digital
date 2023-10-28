import { React, useEffect } from 'react';
import { OneBigProject } from './Accueil';


import ImageProject_1 from '../Style/Images/Infos/Event-1.jpg';
import ImageProject_2 from '../Style/Images/Infos/Event-2.jpg';
import ImageProject_3 from '../Style/Images/Infos/Event-29.jpg';
import ImageProject_4 from '../Style/Images/Infos/Event-12.jpg';
import ImageProject_5 from '../Style/Images/Infos/Event-35.jpg';


function Articles() {

    useEffect(() => {
        let ToDisplayonBLoade = document.querySelector(".before-loader")
        ToDisplayonBLoade.style.display = 'none';

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.top = `-400%`


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
        <div id="Infos">
            <section className='AccueilBigProjectsSection'>

                <OneBigProject title={'Manufactures Sénégalaises Des Arts Décoratifs de THIES'} image={ImageProject_4}
                    description={"404 digital et Yord studio (République Tchèque) a collaboré afin de numériser la salle d’exposition des manufactures Sénégalaises des arts Décoratifs de Thiès."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={1} The_Experience={false} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/MSDAD-de-THIES'} side={'right'} />

                <OneBigProject title={`Musée Théodore-Monod d'art africain`} image={ImageProject_1}
                    description={`Le Musée Théodore Monod a accueilli la restitution des résidences crea.sen, organisée en collaboration avec l'Union Européenne`}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={2} The_Experience={false} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/Articles_3'} side={'left'} />

                <OneBigProject title={'FORAFRICC 2023'} image={ImageProject_2}
                    description={"Dans le cadre du FORAFRICC organisé par la Fondation Youssou Ndour pour les industries culturelles et créatives, le pôle EUNIC Sénégal organisera un panel avec : 404 Digital  "}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={3} The_Experience={false} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/FORAFRICC_2023'} side={'right'} />

                <OneBigProject title={'Fix Challenge 2023'} image={ImageProject_3}
                    description={"Lauréat de la compétition Fix Challenge 2023 ! La notre start-up et remporte le 3e prix, démontrant Son Excellence et son innovation dans le domaine de la technique. Nous sommes honorés d'avoir été reconnus par le réseau Free Sénégal pour notre travail et notre dévouement. Cette victoire marque un jalon important dans notre parcours et nous motive à continuer à repousser les limites de l'innovation numérique. Merci à tous nos membres talentueux de l'équipe et à nos partenaires pour leur soutien indéfectible. Ensemble, nous construisons un avenir prometteur pour le secteur technologique au Sénégal."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={4} The_Experience={false} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/Articles_4'} side={'left'} />

                <OneBigProject title={'DAKAR, CZECH IT OUT 2023'} image={ImageProject_5}
                    description={"Renforcer les liens numériques ! 🤝🌐 404 Digital s'est associé à l\'Ambassadeur de la République tchèque et à l\'Ambassadeur de l\'Union européenne, renforçant ainsi la collaboration entre nos pays dans le domaine numérique."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={5} The_Experience={false} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/CZECH_IT_OUT'} side={'right'} />
            </section>
        </div>
    );
}

export default Articles;
