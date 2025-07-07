import Map from 'ol/Map'
import View from 'ol/View'
import Point from 'ol/geom/Point'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM'
import { fromLonLat} from 'ol/proj'
import TileLayer from 'ol/layer/Tile'
import { Feature } from 'ol'
import Style from 'ol/style/Style'
import CircleStyle from 'ol/style/Circle'
import Fill from 'ol/style/Fill'

export const olView = (cont:HTMLDivElement):View => {
    const address = new Point(fromLonLat([-71.830923,  42.244988]))
    let map = new Map({
        target:cont,
        layers:[
            new TileLayer({source:new OSM()}),
            new VectorLayer({
                source:new VectorSource({
                    features: [new Feature(address)],
                }),
                style:new Style({
                    image:new CircleStyle({
                        radius:7,
                        fill:new Fill({color:'red'})
                    })
                })
            })
        ]
    })
    
    map.setView(new View(
        {
            center:fromLonLat([-71.50, 42.10]), 
            zoom:8,
            minZoom: 8,
            maxZoom:18
        }
    ))
    return map.getView()
}