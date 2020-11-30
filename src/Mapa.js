import React, {useEffect} from 'react';
import axios from "axios";
import { Col, Row, Container} from 'reactstrap';

function Mapa(props){
    const getHistoric = async () => {
        try {
            const data = await axios.get("http://localhost:5000/list_historico");
            const cities = data.data;

            var map = document.getElementById("map");
            var svgDoc = map.contentDocument;
          
            cities.forEach((city) => {
                let cityName = city._id.replace(/\ /g, '_');
                let cases = city.casos;
                let delta = svgDoc.getElementById(cityName);

                delta.onmouseenter = () => {
                    delta.style.stroke = 'black'
                    delta.style.strokeWidth = '196.55514526';
                    let popup = document.getElementById('map-popup');
                    popup.style.display = 'block';
                    popup.innerHTML = `Cidade: ${city._id} <br>Casos: ${cases}`
                   
                }

                delta.onmouseleave = () => {
                    delta.style.stroke = '#646464'
                    delta.style.strokeWidth = '76.55514526';
                }

                let color;
                if(cases < 100){
                    color = '#ffdfd4';
                }
                else if(cases < 1000){
                    color = '#E9967A';
                }
                else if(cases < 10000){
                    color = '#FA8072';
                }
                else if(cases < 50000){
                    color = '#A52A2A';
                }
                else{
                    color = '#8B0000';
                }
                delta.style.fill = color;
            })

        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        
            getHistoric();
        
    }, [])

    return(
        <Container> 
            <Row style={{
                position: "absolute",
                left: "350px",
                marginTop: "30px",
                background: "white",
                padding: "20px",
                borderRadius: "20px",
                display: "none"
            }} id="map-popup">Cidade: São Paulo. Casos: 0.</Row>
                
            <div style={{background:"#FFF", position: "absolute", left: "350px", marginTop:"500px", padding:"10px"}}>
                <tr style={{textAlign:"center"}}>
                    <td colSpan="2">Densidade Demográfica</td>
                </tr>
                <tr>
                    <td style={{background:"#ffdfd4", width:"10px", height:"1vh", paddingRight:"15px"}}></td>
                    <td style={{paddingLeft: "10px"}}>0-99</td>
                </tr>
                <tr>
                    <td style={{background:"#E9967A", width:"10px", height:"1vh", paddingRight:"15px"}}></td>
                    <td style={{paddingLeft: "10px"}}>100-999</td>
                </tr>
                <tr>
                    <td style={{background:"#FA8072", width:"10px", height:"1vh", paddingRight:"15px"}}></td>
                    <td style={{paddingLeft: "10px"}}>1000-9999</td>
                </tr>
                <tr>
                    <td style={{background:"#A52A2A", width:"10px", height:"1vh", paddingRight:"15px"}}></td>
                    <td style={{paddingLeft: "10px"}}>10000-49999</td>
                </tr>
                <tr>
                    <td style={{background:"#8B0000", width:"10px", height:"1vh", paddingRight:"15px"}}></td>
                    <td style={{paddingLeft: "10px"}}>50000+ </td>
                </tr>
            </div>
            
            <object   data="/mapa.svg" type="image/svg+xml" id="map" width="1200px" height="100%"> </object>

        </Container>
    )
}

export default Mapa;