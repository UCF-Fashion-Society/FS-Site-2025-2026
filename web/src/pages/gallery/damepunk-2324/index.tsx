

import Gallery from '../../../components/gallery/index';

const GalleryProps = {
    imagesUrls: [
        "gallery/damepunk/1.jpg",
        "gallery/damepunk/2.jpg",
        "gallery/damepunk/4.jpg",
        "gallery/damepunk/5.jpg",
        "gallery/damepunk/6.jpg",
        "gallery/damepunk/7.jpg",
    ],
    title: 'DAME PUNK',
    year: '2025'
}

const DamePunkShow = () => {


    return (
        <div className="mt-32">
            {/* Title */}
            <Gallery {...GalleryProps} />
        </div>
    )
}

export default DamePunkShow;