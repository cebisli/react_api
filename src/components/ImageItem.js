function ImageItem({image}) {
    return ( 
        <div>
            <img className="imageItem" src={image.urls.small} alt={image.alt_description}></img>
        </div>
     );
}

export default ImageItem;