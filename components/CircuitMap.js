import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

async function getLocations(){
  var markers = []
  const url = 'http://localhost:8080/circuits/locations'
  const init = {
    method: 'GET'
  }
  const response = await fetch(url, init)
  const data = await response.json()
  console.log(data)
  for(var i = 0; i < data.length; i++){
    markers.push({
      markerOffset:15,
      name:data[i].name,
      coordinates:  [data[i].lng, data[i].lat]
    })
  }
  console.log(markers)
  return markers
}

class CircuitMap extends React.Component {
  constructor(props){
    super(props)
    this.state = {markers: []}
  }

  async componentDidMount(){
    const data = await getLocations()
    this.setState({markers: data})
  }

  render(){
    const { markers } = this.state
    return (
      <div id="MapContainer">
        <ComposableMap>
          <ZoomableGroup minZoom={0.75} translateExtent={[[-100, -100],[1000,1000]]}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {

                    }}
                    onMouseLeave={() => {

                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                        stroke: "#FFF"
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle className="marker" r={2} fill="#F00" stroke="#fff" strokeWidth={1} />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default CircuitMap;
