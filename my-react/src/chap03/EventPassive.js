import { useRef, useEffect } from 'react';
import './EventPassive.css';

export default function EventPassive() {
    const handleWheel = e => e.preventDefault();
    const divRef = useRef(null);
    useEffect(() => {
        const div = divRef.current;
        div.addEventListener('wheel', handleWheel, {passive: false});
        return (() => {
            div.removeEventListener('wheel', handleWheel);
        });
    });
    return (
        // <div className='box' onWheel={handleWheel}>
        //     たとえばWheelイベントをハンドラーで・・・
        // </div>
        <div ref={divRef} className='box'>
            たとえばWheelイベントをハンドラーで・・・
        </div>
    );
}