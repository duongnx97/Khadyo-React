import GalleryS from '../components/Gallery-single';

export default function Gallery() {
    return (
        <div className="slider-gallery-img">
            <div className="container-fluid">
                <div className="slider-gallery-active">
                    <GalleryS galleryImg="gm1.jpg" />
                    <GalleryS galleryImg="gm2.jpg" />
                    <GalleryS galleryImg="gm3.jpg" />
                    <GalleryS galleryImg="gm4.jpg" />
                    <GalleryS galleryImg="gm5.jpg" />
                    <GalleryS galleryImg="gm6.jpg" />
                </div>
            </div>
        </div>
    )
}