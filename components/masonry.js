import { useEffect } from "react";
import CardHover from "../components/card_hover"

export default function MasonryGallery() {
	
    useEffect(() => {
        // initializing masonry whenever content
        // const imagesLoaded = require('imagesloaded');
        const Masonry = require('masonry-layout');
        var elem = document.querySelector('.masonry-photos');

        if (elem) {
            var msnry = new Masonry(elem, {
                itemSelector: '.masonry-photo',
                percentPosition: true,
                fitWidth: true,
            });
            // imagesLoaded(elem, function (instance) {
            //     var msnry = new Masonry(elem, {
            //         itemSelector: '.masonry-photos',
            //         percentPosition: true
            //     });
            // });
        }
    }, [])

    return (
        <div className="masonry-photos">
           
            {process.env.works.map((work) => {
                    return (
                        <CardHover 
                            key={work.id}
                            description={work.description}
                            image={work.image}
                            image_mobile={work.image_mobile}
                            image_alt={work.image_alt}
                            tags={work.tags}
                            year={work.year}
                            link={work.link}
                            col_class_name={work.col_class_name}
                        />
                    )
                })
            }
        </div>
    )
}