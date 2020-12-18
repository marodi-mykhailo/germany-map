import React from 'react';
import s from './Legend.module.css'

const Legend = ({arr}) => {
    let newArr;
    const getStyle = () => {
        const keys = Object.keys(arr)
        keys.sort((a, b) => a - b);
        newArr = keys.map((item, i) => <div className={s.legendBox}>
                <div className={s.colorBox} style={{
                    "backgroundColor": `${arr[item]}`
                }}/>
                {(i === 0 ||
                    i === Math.floor(keys.length / 2)
                    || i === keys.length - 1)
                && <span className={s.legendNum}>{keys[i]}</span>}
            </div>
        )
    }
    getStyle();
    return (
        <div className={s.wrapp}>
            <span className={s.title}>Gesamtkrankenstand</span>

            <div className={s.colorWrapp}>
                <span className={s.legende}>Legende:</span>
                {newArr.map(item => item)}
            </div>
        </div>
    );
};

export default Legend;
