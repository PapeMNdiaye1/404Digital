import { React, useEffect, useState, Fragment } from 'react';
import { Link } from "react-router-dom";

import ImageProjectB1 from '../Style/Images/Project/City-9.jpg';
import ImageProjectC2 from '../Style/Images/Project/Interior-1-2.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectI2 from '../Style/Images/Project/Villa_B-2.jpg';
import ImageProjectM1 from '../Style/Images/Project/ProductA-1.jpg';
import ImageProject_3 from '../Style/Images/Infos/Event-2.jpg';
import ImageProject_4 from '../Style/Images/Infos/Event-12.jpg';

function Accueil({ GetImageToApp }) {


    useEffect(() => {

        let ToDisplayonBLoade = document.querySelector(".before-loader")
        ToDisplayonBLoade.style.display = 'none';

        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.top = `-0%`

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';

        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);

        let TheFooter = document.querySelector(".the_footer")
        TheFooter.style.opacity = '1';

        let ThesliderImg = document.querySelectorAll(".slider")
        let thePageWidth = window.innerWidth
        return () => {
            ToDisplayonBLoade.style.display = 'flex';
            AccueilContainer.scrollTop = 0;
        };
    }, []);

    const GetImageOnApp = (theimage, title, date, link) => {
        GetImageToApp(theimage, title, date, link);
    }

    return (
        <div id="Accueil">
            <AccueilSlider />
            <section className='archviz_presantation' >
                <h2 className='qui_somme_nous' >
                    Qui sommes-nous ?
                </h2>
                <p>
                    404 digital est une Start-up novatrice dans le domaine de la réalité virtuelle et augmentée repoussant les limites de l'immersion tout en proposant des solutions pour le développement du secteur numérique en Afrique.
                </p>

                <div className='network_container'>
                    <a href="https://www.instagram.com/arch_viz_sn/" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de ArchViz.sn" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                    </a>
                    <a href="mailto:archviz.sn@gmail.com?subject=Message provenant de ArchViz.sn" target="_blank">
                        <div className="network">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                    </a>
                </div>
            </section>

            <div className='intervention-area'>
                <Link className='the_link' to={'./Services'}>
                    <div className='one-card'>
                        <div className='card-cover card-cover-1'>

                        </div>
                        <div className='title-of-card'>
                            RÉALITÉ AUGMENTÉE
                        </div>
                        <p>
                            La réalité augmentée (AR) est une version améliorée du monde physique qui ajoute des éléments numériques à une vue en direct du monde physique grâce au suivi et au rendu.</p>
                    </div>
                </Link>

                <Link className='the_link' to={'./Services'}>
                    <div className='one-card'>
                        <div className='card-cover card-cover-2'>

                        </div>
                        <div className='title-of-card'>
                            VISUALISATION 3D
                        </div>
                        <p>
                            La visualisation 3D est une méthode puissante et polyvalente qui présente de nombreux avantages pour différentes industries. Elle permet de représenter graphiquement des objets, des scènes ou des données dans un environnement tridimensionnel, offrant ainsi une expérience visuelle immersive et réaliste.
                        </p>
                    </div>
                </Link>
                <Link className='the_link' to={'./Services'}>
                    <div className='one-card'>
                        <div className='card-cover card-cover-3'>

                        </div>
                        <div className='title-of-card'>
                            RÉALITÉ VIRTUEL
                        </div>
                        <p>
                            La technique de réalité virtuelle (VR) permet à l'utilisateur de se retrouver dans un environnement simulé, idéalement accompagnée de son interaction. En bref, les techniques VR créent l'illusion du monde réel. Avec le potentiel illimité des offres de réalité virtuelle, il devient progressivement un nouvel outil de prédilection pour de nombreuses industries et entreprises.
                        </p>

                    </div>
                </Link>
            </div>

            <div className='software'>
                <div className='apple'>
                </div>
                <div className='blender'>
                </div>
                <div className='unreal'>
                </div>
                <div className='ds'>
                </div>
                <div className='oculus'>
                </div>
                <div className='meta'>
                </div>
                <div className='nvidia'>
                </div>
                <div className='arch'>
                </div>
            </div>

            <section className='AccueilBigProjectsSection'>

                <OneBigProject title={'Manufactures Sénégalaises Des Arts Décoratifs de THIES'} image={ImageProject_4}
                    description={"404 digital et Yord studio (République Tchèque) a collaboré afin de numériser la salle d’exposition des manufactures Sénégalaises des arts Décoratifs de Thiès."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={1} The_Experience={false} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/MSDAD-de-THIES'} side={'right'} />

                <OneBigProject title={'FORAFRICC 2023'} image={ImageProject_3}
                    description={`Dans le cadre du FORAFRICC organisé par la Fondation Youssou Ndour pour les industries culturelles et créatives, le pôle EUNIC Sénégal organisera un panel avec : 404 Digital`}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={1} The_Experience={false} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/FORAFRICC_2023'} side={'left'} />

            </section>

            <section className='galerie_presantation'>
                <Link className='nos_réalisations' to={'./Articles'}>
                    Nos Articles  <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
            </section>

            <section className='equipe_presantation'>
                <h2 className='equipe' >
                    Membres Fondateurs
                </h2>
                <div className='equipe_big_container'>
                    <div className='members members-A'>
                        <div className='pic pic1'>

                        </div>
                        <em>
                            Pape Momar Ndiaye
                        </em>   <br />
                        <p>
                            Chief Technical Officer( CTO) : Manœuvre le déploiement technologique au sein de la start-up tout en analysant les risques et les opportunités de tous les projets, en même temps gère toute la partie Web et Web XR.          </p>
                    </div>
                    <div className='members members-A'>
                        <div className='pic pic2'>

                        </div>
                        <em>
                            Mouhamadou Moustapha Thiam
                        </em>   <br />
                        <p>
                            Chief Marketing & Commercial ( CMC) : Établir les stratégies commerciales au sein de la boîte mais aussi de la transformation digitale (E-marketing).          </p>
                    </div>
                    <div className='members members-A'>
                        <div className='pic pic3'>
                        </div>
                        <em>
                            Abdoulaye Ba
                        </em>   <br />
                        <p>
                            Project Manager ( COP) : Assurer la bonne coordination des projets au sein de l'entreprise, gère la gestion administrative et juridique mais aussi trouvent de potentiels partenaires.    </p>
                    </div>
                    <div className='members members-A'>
                        <div className='pic pic4'>

                        </div>
                        <em>
                            Gora Séne
                        </em>   <br />
                        <p>
                            Product & Design Manager (CPO) : Manœuvre développement des produits au niveau de la start-up et chapeaute aussi les campagnes de communication des produits.    </p>
                    </div>
                </div>
            </section>

            <section className='AccueilBigProjectsSection'>

                <OneBigProject title={'Villa Saly'} image={ImageProjectI2}
                    description={"Des designs Modernes, épurés, etc…. nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={1} The_Experience={true} The_Experience_Link={'https://villa-r-1.netlify.app/'} link={'/Villa-Saly'} side={'right'} />

                <OneBigProject title={'Cité El Hadj Amadou BA'} image={ImageProjectB1}
                    description={"Ce projet comprend des villas familiales, des bâtiments commerciaux et résidentiels ainsi que des lieux publics. Notre travail se partage à parts égales entre les animations architecturales et les rendus 3D. Nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={2} link={'/City1'} side={'left'} The_Experience={false} />

                <OneBigProject title={'Visualisations 3D De Produits'} image={ImageProjectM1}
                    description={"Cette technique offre de nombreux avantages pour différentes industries, en leur permettant de mieux visualiser, de présenter et de commercialiser leurs produits."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={3} link={'/ProduitsA'} side={'right'} The_Experience={false} />

                <OneBigProject title={'Décoration Intérieur'} image={ImageProjectC2}
                    description={"À l'aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur. Nous vous aidons dans l’aménagement de vos espaces."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={4} side={'left'} link={'/Interior1'} The_Experience={true} The_Experience_Link={'https://papemndiaye1.github.io/ArchViz_Interior_Design_1/'} />

                <OneBigProject title={'La 3D dans le domaine des Industries'} image={ImageProjectF2}
                    description={"Le rendu et l'animation avec des temps de production de plus en plus rapide ont ouvert la porte à un monde de variations infinies dans la conception graphique adaptée à vos demandes uniques."}
                    color={'#000'} textcolor={'#f1f1f1'} theKey={5} The_Experience={false} link={'/Hangar1'} side={'right'} />
            </section>

            <section className='galerie_presantation'>
                <Link className='nos_réalisations' to={'./Travaux'}>
                    Nos Réalisations   <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
            </section>

        </div >
    );
}
//!###############################################################
function AccueilSlider() {

    const onClickOnDot = (e) => {
        let AllSlider = document.querySelectorAll(".slider")
        let AllDot = document.querySelectorAll(".dot")
        let theSliderKey = e.target.getAttribute('theSlider')

        AllDot.forEach(element => {
            element.classList.remove('ativeDot')
        });
        e.target.classList.add('ativeDot')

        AllSlider.forEach(element => {
            element.style.opacity = '0'
        });
        AllSlider[theSliderKey - 1].style.opacity = '1'

        setTimeout(function () {
            AllSlider.forEach(element => {
                element.style.zIndex = '1'
            });
            AllSlider[theSliderKey - 1].style.zIndex = '4'
        }, 6100);
    }

    useEffect(() => {
        let sliderBtnContainer = document.querySelector(".slider_btn_container")
        let AllDot = sliderBtnContainer.childNodes

        AllDot.forEach(element => {
            element.addEventListener("click", onClickOnDot);
        });

        AllDot[0].classList.add('ativeDot')
        let theCourentSlide = 0

        return () => {
            sliderBtnContainer.innerHTML = '';
        }
    }, [])
    const CreateSliderBtn = (theSlider) => {
        let sliderBtnContainer = document.querySelector(".slider_btn_container")
        let OneDot = document.createElement("div")
        OneDot.classList.add('dot');
        OneDot.setAttribute("theSlider", theSlider);
        sliderBtnContainer.appendChild(OneDot)
    }
    return (
        <div className="Accueil_Slider">
            <Slider giveSliderKey={CreateSliderBtn} theKey={1} date={'Séngal, Dakar'} title={<p>EXPERIENCES DE RÉALITÉ VIRTUELLE</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={2} date={'Séngal, Dakar'} title={<p>CRÉATION DE MAQUETTES </p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={3} date={'Séngal, Dakar'} title={<p>VISUALISATIONS 3D DE PRODUITS</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={4} date={'Séngal, Dakar'} title={<p>VISUALISATIONS ARCHITECTURALS ET IMMOBILIERS</p>} />
            <div className='slider_btn_container'>
            </div>
        </div>
    );
}
//!###############################################################
function Slider({ giveSliderKey, title, date, theKey }) {
    useEffect(() => {
        giveSliderKey(theKey)
    });
    return (
        <div className='slider'>
            <div className='slider_title'>
                {title}
            </div>
            <div className='slider_date'>
                {date}
            </div>
        </div>
    );
}
//!###############################################################
function OneBigProject({ color, title, description, side, textcolor, theKey, image, link, The_Experience, The_Experience_Link }) {
    const [TheSide, setTheSide] = useState('');
    useEffect(() => {
        setTheSide(side)
        let TheSidedProject = document.querySelectorAll('.One_Project_In_Home')
        TheSidedProject[theKey - 1].style.backgroundColor = color;
        TheSidedProject[theKey - 1].style.border = `.5em solid ${color}`;
    });

    return (
        <Fragment>
            {TheSide === "right" ? (
                <section className="One_Project_In_Home right">
                    <div
                        style={{
                            color: textcolor,
                        }}
                        className='info_container '>
                        <h3
                            style={{
                                color: textcolor,
                            }} className='title'>
                            {title}
                        </h3>
                        <div
                            className='description'>
                            <div
                                style={{
                                    backgroundColor: textcolor,
                                }}
                                className='bar'>
                            </div>
                            {description}
                            <Link className='the_link'
                                style={{
                                    color: textcolor,
                                    border: `.1em solid ${textcolor}`
                                }} to={link}>
                                Voir plus  <ion-icon name="arrow-forward-outline"></ion-icon>
                            </Link>
                            {The_Experience ? (
                                <a
                                    style={{
                                        color: textcolor,
                                        border: `.1em solid ${textcolor}`
                                    }}
                                    className='the_link' href={The_Experience_Link} target="_blank" >

                                    Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                                </a>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                    <div
                        role="img" alt={title}
                        className='image_container'
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    >
                    </div>
                </section>
            ) : (
                <section className="One_Project_In_Home left">
                    <div
                        style={{
                            color: textcolor,
                        }}
                        className='info_container' >
                        <h3
                            style={{
                                color: textcolor,
                            }}
                            className='title' >
                            {title}
                        </h3>
                        <div
                            className='description'>
                            <div
                                style={{
                                    backgroundColor: textcolor,
                                }}
                                className='bar'>
                            </div>
                            {description}
                            <Link className='the_link'
                                style={{
                                    color: textcolor,
                                }} to={link}>

                                Voir plus  <ion-icon name="arrow-forward-outline"></ion-icon>
                            </Link>
                            {The_Experience ? (
                                <a
                                    style={{
                                        color: textcolor,
                                    }}
                                    className='the_link' href={The_Experience_Link} target="_blank" >

                                    Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                                </a>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                    <div
                        role="img" alt={title}
                        className='image_container'
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    >
                    </div>
                </section>
            )
            }
        </Fragment >
    );
}

//!###############################################################
function TheFooter({ }) {

    const onClickOnTab = () => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;
    }

    return (
        <footer className='the_footer'>
            <div
                role="img" alt='ArchVizLogo'
                className='logo-container'>
            </div>
            <div className='titles'>Categories</div>
            <div className='titles'>Contacts</div>
            <div className='titles'>Reseaux</div>
            <div className='titles'></div>
            <p className='archviz_description'>
                Notre mission est d'explorer les possibilités infinies offertes par la réalité virtuelle pour transformer la manière dont les individus travaillent, se divertissent et se connectent entre eux. Nous nous efforçons de créer des expériences RV de haute qualité qui plongent les utilisateurs dans des environnements virtuels saisissants, réalistes et captivants.
            </p>
            <nav className='menu_elemant_container'>
                <Link className='menu_elemant' to={'/'} onClick={onClickOnTab}>
                    Accueil
                </Link>
                <Link className='menu_elemant' to={'/Travaux'} onClick={onClickOnTab}>
                    Travaux
                </Link>
                <Link className='menu_elemant' to={'/Services'} onClick={onClickOnTab}>
                    Services
                </Link>
                <Link className='menu_elemant' to={'/ARTICLES'} onClick={onClickOnTab}>
                    Articles
                </Link>
                <div className='menu_elemant'></div>
            </nav>
            <div className='categories_elemant_container'>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Visualisation</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Creation de Visite Web</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Experience de Realite Virtuel</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Experience de Realite Augmentée</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Visualisations Architecturals</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Creation de Maquette</div>
            </div>
            <div className='contact_elemant_container'>
                <div className='contact_elemant '>digital404sn@gmail.com</div>
                <div className='contact_elemant '>Tel: 77 727 86 55</div>
                <div className='contact_elemant '>Tel: 77 493 89 89</div>
            </div>
            <div className='network_container'>

                <a href="https://www.instagram.com/404_digital/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                </a>

                <a href="mailto:digital404sn@gmail.com?subject=The message" target="_blank">
                    <div className="network">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/digital-sn-50276a222/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                </a>

                <a href="https://web.facebook.com/profile.php?id=100083761231857" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                </a>

                <a href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de 404 Digital.sn" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </div>
                </a>
            </div>

            <div className='the_line'>
            </div>
            <div className='country'>
                <ion-icon name="globe-outline"></ion-icon>  Sénégal
            </div>
            <div className='rights'>
                © 2023 | 404 Digital. Tout droit réservé.
            </div>
        </footer>
    );
}




export { Accueil, OneBigProject, TheFooter };
