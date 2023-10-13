import { React, useEffect, useState, Fragment } from 'react';

import ImageProjectC1 from '../../Style/Images/Project/ProductB-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/ProductB-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/ProductB-3.jpg';
import ImageProjectC4 from '../../Style/Images/Project/ProductB-4.jpg';
import ImageProjectC5 from '../../Style/Images/Project/ProductB-5.jpg';

function SmallHouse1({ }) {
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

            <div className='Villa_A_container'>
                <div className='project_display'>
                    <h1 className='project_title'>
                        Visualisations Tapie De Souris Gamer(Wraptor Gaming)
                    </h1>
                    <h3 className='project_description'>
                        | 23 Décembre, 2022 |
                    </h3>
                    <p>
                        Cette technique offre de nombreux avantages pour différentes industries, en leur permettant de mieux visualiser, de présenter et de commercialiser leurs produits.                                                       </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC5} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='47%' />
                        <img onClick={displayImage} src={ImageProjectC4} width='47%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='100%' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}




export default SmallHouse1;
