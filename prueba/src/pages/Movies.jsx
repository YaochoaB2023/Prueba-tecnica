import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { useEffect, useState } from 'react';
import JSON from '../data/sample.json'
import '../styles/movies.css'

export const Movies = () => {

  const [datos, setDatos] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    setDatos(JSON);
  }, []);

  const filteredAndSortedData = () => {
    return datos?.entries
      .filter(entry => entry.releaseYear >= 2010 && entry.programType === "movie")
      .sort((a, b) => a.title.localeCompare(b.title));
  };

  const showPopup = entry => {
    setPopupInfo(entry);
  };

  const closePopup = () => {
    setPopupInfo(null);
  };
  

  return (
    <>
      <NavBar/>
      <div className="result-box">
        {filteredAndSortedData()?.slice(0, 20).map((entry, index) => (
          <div key={index}  className="caja">
              <div >
                <img src={entry.images["Poster Art"]?.url} alt={`Poster for ${entry.title}`} />
              </div>
              <div className="title">
                <h3
                  onMouseOver={() => {console.log("mouse"); setPopupInfo(null)}}
                  onClick={() => { 
                    console.log("click"); showPopup(entry)}}>{entry.title}
                </h3>
              </div>
          </div>
        ))}

        {popupInfo && (
          <div className={`popup ${popupInfo ? 'visible' : ''}`} onClick={closePopup}>
            <div className="modal">
              <h3>{popupInfo.title}</h3>
              <p>{popupInfo.description}</p>
              <p>Release Year: {popupInfo.releaseYear}</p>
              <img src={popupInfo.images["Poster Art"]?.url} alt={`Poster for ${popupInfo.title}`} />
              <button onClick={closePopup}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  )
}
