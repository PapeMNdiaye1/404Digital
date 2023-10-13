import { React, useEffect, useState, Fragment } from 'react';


import ImageProjectC1 from '../../Style/Images/Infos/Event-4.jpg';
import ImageProjectC2 from '../../Style/Images/Infos/Event-25.jpg';
import ImageProjectC3 from '../../Style/Images/Infos/Event-26.jpg';
import ImageProjectC4 from '../../Style/Images/Infos/Event-31.jpg';
import ImageProjectC5 from '../../Style/Images/Infos/Event-28.jpg';
import ImageProjectC6 from '../../Style/Images/Infos/Event-29.jpg';
import ImageProjectC7 from '../../Style/Images/Infos/Event-30.jpg';



function Pharmacie1({ }) {
    const [TheImageContainer, setTheImageContainer] = useState(false);
    const [TheImageInTheContainer, setTheImageInTheContainer] = useState(ImageProjectC1);

    useEffect(() => {
        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.opacity = `0`
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;
        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';
        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);
        return () => {
            Page_slider.style.opacity = `1`
        }
    }, []);
    const displayImage = (e) => {
        if (TheImageContainer) {
            setTheImageContainer(false);
        } else {
            setTheImageInTheContainer(e.target.getAttribute("src"))
            setTheImageContainer(true);
        }
    }
    return (
        <Fragment>
            {TheImageContainer &&
                <div className='display_image_container'>
                    <div>
                        <div
                            onClick={displayImage}
                            className='close_image_container'>
                        </div>
                        <img src={TheImageInTheContainer} width='100%' />
                    </div>
                </div>
            }
            <div className='Article_4'>
                <div className='project_display'>
                    <h1 className='project_title'>
                        Fix Challenge
                    </h1>
                    <h3 className='project_description'>
                        | 15 Juillet , 2023 |
                    </h3>
                    <p>
                        Lauréat de la compétition Fix Challenge 2023 ! La notre start-up et remporte le 3e prix, démontrant Son Excellence et son innovation dans le domaine de la technique. Nous sommes honorés d'avoir été reconnus par le réseau Free Sénégal pour notre travail et notre dévouement. Cette victoire marque un jalon important dans notre parcours et nous motive à continuer à repousser les limites de l'innovation numérique. Merci à tous nos membres talentueux de l'équipe et à nos partenaires pour leur soutien indéfectible. Ensemble, nous construisons un avenir prometteur pour le secteur technologique au Sénégal.
                    </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC7} width='100%' alt='  Pharmacie Design - 1' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC5} width='100%' alt='  Pharmacie Design - 1' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='47%' alt='  Pharmacie Design - 3' />
                        <img onClick={displayImage} src={ImageProjectC3} width='47%' alt='  Pharmacie Design - 4' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC6} width='100%' alt='  Pharmacie Design - 3' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' alt='  Pharmacie Design - 5' />
                    </div>
                    <p >
                        La Cheffe de Mission Adjointe a accueilli à l'Ambassade l'équipe talentueuse de la start-up 404 Digital sn de Thiès pour discuter de leurs activités dans le domaine du digital et du numérique et des possibilités de coopération mutuelle.
                    </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='40%' alt='  Pharmacie Design - 5' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}




export default Pharmacie1;
