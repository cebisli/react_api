import ImageItem from "./ImageItem";

function ImageList({imagesPlaceHolder}) {
    
    const imageGoster = imagesPlaceHolder.map((image, index) => {  // map fonksiyonu ile gelen imageları dolaşıp, her image ı ımageItem e gönderiyoruz.
        return <ImageItem key={index} image={image} />;
    });
    
    return ( 
        <div className="imageList">
            {imageGoster}                      
        </div> 
    );
}

export default ImageList;