import { React, useEffect, useState, Fragment } from 'react';


import ImageProjectC1 from '../../Style/Images/Infos/Event-42.jpg';
import ImageProjectC2 from '../../Style/Images/Infos/Event-43.jpg';
import ImageProjectC3 from '../../Style/Images/Infos/Event-44.jpg';
import ImageProjectC6 from '../../Style/Images/Infos/Event-47.jpg';
import ImageProjectC7 from '../../Style/Images/Infos/Event-48.jpg';
import ImageProjectC8 from '../../Style/Images/Infos/Event-41.jpg';
import ImageProjectC9 from '../../Style/Images/Infos/Event-40.jpg';



function Pharmacie1({ }) {
    const [TheImageContainer, setTheImageContainer] = useState(false);
    const [TheImageInTheContainer, setTheImageInTheContainer] = useState(ImageProjectC1);

    useEffect(() => {
        let ToDisplayonBLoade = document.querySelector(".before-loader")
        ToDisplayonBLoade.style.display = 'none';
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
            ToDisplayonBLoade.style.display = 'flex';
            AccueilContainer.scrollTop = 0;
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
            <div className='Article_5'>
                <div className='project_display'>
                    <h1 className='project_title'>
                       FIT
                    </h1>
                    <h3 className='project_description'>
                        | 17 Octobre , 2023 |
                    </h3>
                    <p>
                    La « Place des Métiers » est une activité ludique et participative adressée aux jeunes sur le
thème des métiers qui vise à sensibiliser le public sur les opportunités de la formation
professionnelle. L’objectif poursuivi par cette activité est de faire connaître l’initiative FIT !
mais aussi de véhiculer une image plus attractive et plus moderne de la formation
professionnelle.
                    </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' alt='  Pharmacie Design - 4' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC8} width='47%' alt='  Pharmacie Design - 1' />
                        <img onClick={displayImage} src={ImageProjectC6} width='47%' alt='  Pharmacie Design - 3' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC7} width='100%' alt='  Pharmacie Design - 1' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='47%' alt='  Pharmacie Design - 5' />
                        <img onClick={displayImage} src={ImageProjectC2} width='47%' alt='  Pharmacie Design - 3' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC9} width='100%' alt='  Pharmacie Design - 3' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}




export default Pharmacie1;
