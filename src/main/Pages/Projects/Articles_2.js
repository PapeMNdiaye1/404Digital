import { React, useEffect, useState, Fragment } from 'react';

import ImageProjectC2 from '../../Style/Images/Infos/Event-19.jpg';
import ImageProjectC1 from '../../Style/Images/Infos/Event-18.jpg';
import ImageProjectC3 from '../../Style/Images/Infos/Event-17.jpg';
import ImageProjectC4 from '../../Style/Images/Infos/Event-16.jpg';
import ImageProjectC5 from '../../Style/Images/Infos/Event-15.jpg';
import ImageProjectC6 from '../../Style/Images/Infos/Event-14.jpg';
import ImageProjectC7 from '../../Style/Images/Infos/Event-13.jpg';
import ImageProjectC8 from '../../Style/Images/Infos/Event-12.jpg';
import ImageProjectC9 from '../../Style/Images/Infos/Event-11.jpg';
import ImageProjectC10 from '../../Style/Images/Infos/Event-10.jpg';

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
            <div className='Pharmacie_3_container'>
                <div className='project_display'>
                    <h1 className='project_title'>
                        Manufactures Sénégalaises Des Arts Décoratifs de THIES
                    </h1>
                    <h3 className='project_description'>
                        | 12 October , 2022 |
                    </h3>
                    <p>404 digital et Yord studio (République Tchèque) a collaboré afin de numériser la salle d’exposition des manufactures Sénégalaises des arts Décoratifs de Thiès.</p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' alt='  Pharmacie Design - 5' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='47%' alt='  Pharmacie Design - 3' />
                        <img onClick={displayImage} src={ImageProjectC3} width='47%' alt='  Pharmacie Design - 4' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC5} width='100%' alt='  Pharmacie Design - 1' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC6} width='47%' alt='  Pharmacie Design - 3' />
                        <img onClick={displayImage} src={ImageProjectC7} width='47%' alt='  Pharmacie Design - 4' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' alt='  Pharmacie Design - 2' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC8} width='47%' alt='  Pharmacie Design - 3' />
                        <img onClick={displayImage} src={ImageProjectC9} width='47%' alt='  Pharmacie Design - 4' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC10} width='100%' alt='  Pharmacie Design - 2' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}




export default Pharmacie1;
