import React, { useState } from 'react'
import './Formulaire.css'
import Fractale from './Fractale'
import axios from 'axios';



function Formulaire() {


    let [points, setPoints] = useState([{x: 0 , y: 1},  {x: 100 , y: 200}])
    let [segmentsize, setSegmentSize] = useState(0);
    let [degre, setDegre] = useState(0);
  
    async function SendInformationToApi(){
        const requestOptions = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: { degre: degre, segmentSize: 12}
        }
        console.log("TEST input", requestOptions)
        console.log("TEST input2", segmentsize)
        let response = await axios.post('https://localhost:7003/api/Fractale/', { degre: degre, segmentSize: segmentsize})

        setPoints(response.data);
    }
    
  return (
    <div className="form">
      <div className="title">Bienvenu</div>
      <div className="subtitle">Entrez les paramètres</div>
      <div className="input-container ic1">
        <input id="segmentsize" className="input" type="text" placeholder=" " onChange={(change) => {setSegmentSize(change.currentTarget.value)}} />
        <div className="cut"></div>
        <label htmlfor="texte" className="placeholder">Taille du Segment (px)</label>
      </div>
      <div className="input-container ic2">
        <input id="degre" className="input" type="text" placeholder=" " onChange={(change) => setDegre(change.currentTarget.value)} />
        <div className="cut"></div>
        <label className="placeholder">Degré du fractale</label>
      </div>
      <button onClick={SendInformationToApi} type="text" className="submit">Valider</button>

      <div className="input-container ic2">
          {}
    </div>
        <Fractale points={points}/>
    </div>
    
  )
}



export default Formulaire