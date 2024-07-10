import { useEffect } from "react";
import CardHover from "../components/card_hover"
import moment from 'moment'
import _ from 'lodash'

export default function MasonryGallery(props) {

    const gallery = props.gallery
    const col_class_name = props.col_class_name

    const ordered_gallery= _.sortBy(gallery, 'fields.date').reverse();
	
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
        }
    }, [])

    return (
        // <div className="masonry-photos row row-cols-1 row-cols-md-1 row-cols-lg-2">
           
        //     {ordered_gallery.map((work) => {
        //         const images =  work.fields.image.map((i) => {
        //             return `https:${i.fields.file.url}`
        //         })

        //         let year

        //         if(work.fields.deployed === true) {
        //             year = moment(work.fields.date, 'YYYY-MM-DD').format('YYYY')
        //         } else {
        //             year = "Coming Soon"
        //         }

        //             return (
        //                 <CardHover 
        //                     key={work.fields.id}
        //                     title={work.fields.title}
        //                     image={images[0]}
        //                     image_mobile={images[0]}
        //                     image_alt={work.fields.title}
        //                     tags={work.fields.tags}
        //                     date={year}
        //                     link={work.fields.link}
        //                     col_class_name={col_class_name}
        //                     is_deployed={work.fields.deployed}
        //                     use_placeholder={true}
        //                 />
        //             )
        //         })
        //     }
        // </div>
        <div className={`d-flex flex-wrap`}>
            {ordered_gallery.map((work, index) => {
                const images =  work.fields.image.map((i) => {
                    return `https:${i.fields.file.url}`
                })

                let year

                if(work.fields.deployed === true) {
                    year = moment(work.fields.date, 'YYYY-MM-DD').format('YYYY')
                } else {
                    year = "Coming Soon"
                }

                return (
                    <div className="col-12" key={index}>
                        <CardHover 
                            key={work.fields.id}
                            title={work.fields.title}
                            image={images[0]}
                            image_mobile={images[0]}
                            image_alt={work.fields.title}
                            tags={work.fields.tags}
                            date={year}
                            link={work.fields.link}
                            col_class_name={col_class_name}
                            is_deployed={work.fields.deployed}
                            use_placeholder={true}
                            custom_class={index % 2 == 1 ? 'flex-row-reverse': ''}
                        />
                    </div>
                    
                )
            })}
        </div>
    )
}