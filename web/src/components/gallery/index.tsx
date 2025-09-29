interface GalleryProps {
    imagesUrls: string[];
    title?: string;
    year?: string;
}

const Gallery: React.FC<GalleryProps> = (props) => {
    const { imagesUrls, title, year } = props;

    return (
        <>
            <div className="flex flex-col items-center justify-center h-fit w-full mb-32">
                {title && (
                    <div className="flex flex-col items-center text-black z-10  black my-24 border-b border-black/20 w-full p-16">
                        <p className="font-display font-medium text-2xl">{title}</p>
                        <p className="font-display font-light text-sm"> {year}</p>
                    </div>
                )}
                <div className="flex flex-wrap justify-center items-center gap-16 ">
                    {imagesUrls.map((url, index) => (
                        <div key={index} className=" sm:w-1/2 lg:w-1/4">
                            <img src={url} alt={`Gallery item ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
