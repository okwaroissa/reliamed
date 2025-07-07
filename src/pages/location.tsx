import React, {useRef, useEffect} from 'react'
import {View} from 'ol'
import { olView } from '../utils/mapping'
import '../../node_modules/ol/ol.css'
const Location = () => {
    const olviewRef = useRef<HTMLDivElement>(null)
    const viewRef = useRef<View | null>(null)
    useEffect(()=>{
        if (olviewRef.current && viewRef.current == null){
            viewRef.current = olView(olviewRef.current)
        }
    },[])
    return (
        <div className='reliamed-page'>
            <div id='location-page'>
                <div className='location-details'>
                    <p>Reliamed Transportaion Inc is founded in Massachusetts, and serves communities in cities and towns around central Massachusetts.</p>
                    <p>We current operate from, Worcester city.</p>
                </div>
                <div className='ol-view' ref={olviewRef}></div>
            </div>
        </div>
    )
}
export default Location