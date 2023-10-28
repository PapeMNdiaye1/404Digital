import { React, useEffect, useState, Fragment } from 'react';
import ImageProjectC1 from '../../Style/Images/Infos/Event-2.jpg';
import ImageProjectC2 from '../../Style/Images/Infos/Event-3.jpg';
import ImageProjectC3 from '../../Style/Images/Infos/Event-6.jpg';
import ImageProjectC4 from '../../Style/Images/Infos/Event-7.jpg';
import ImageProjectC5 from '../../Style/Images/Infos/Event-8.jpg';

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
            <div className='Pharmacie_2_container'>
                <div className='project_display'>
                    <h1 className='project_title'>
                        FORAFRICC 2023
                    </h1>
                    <h3 className='project_description'>
                        | 22 Mai, 2023 |
                    </h3>
                    <p>
                        Dans le cadre du FORAFRICC organisé par la Fondation Youssou Ndour pour les industries culturelles et créatives, le pôle EUNIC Sénégal organisera un panel avec : 404 Digital                        </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' alt='  Pharmacie Design - 2' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC5} width='100%' alt='  Pharmacie Design - 1' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='47%' alt='  Pharmacie Design - 3' />
                        <img onClick={displayImage} src={ImageProjectC3} width='47%' alt='  Pharmacie Design - 4' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' alt='  Pharmacie Design - 5' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Pharmacie1;
