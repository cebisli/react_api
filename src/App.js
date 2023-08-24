import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './Api.js';
import { useState } from "react";
import ImageList from './components/ImageListe';

function App() {
  
  const [images, setImages] = useState([]); // use state oluşturduk

  const handleSubmit = async (term) => {   // child dan parent e gelen değeri yakalamak için oluşturduk  
    const results = await searchImages(term); // gelen props değerini apiye gönderiyoruz.
    setImages(results);  // images değerini setImages ile setledik.
  }

  // search = SearchHeader component inden gelen props
  // handleSubmit fonksiyonu ile gelen prop u api isteği atıyoruz.
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList imagesPlaceHolder={images}/>
    </div>
  );
}

export default App;
