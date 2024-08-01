import { useState } from "react";

export default function EventMouse({beforeSrc, afterSrc, alt}) {
    const [current, setCurrent] = useState(beforeSrc);
    const handlerEnter = () => setCurrent(afterSrc);
    const handlerLeave = () => setCurrent(beforeSrc);
    return (
        <img src={current} alt="{alt}" onMouseEnter={handlerEnter} onMouseLeave={handlerLeave} />
    );
}