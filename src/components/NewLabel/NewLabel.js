import React from 'react';
import s from './NewLegend.module.css'

const numStyle = {
    color: "white",
}

const NewLegend = ({arr}) => {
    let newArr;
    const getStyle = () => {
        const keys = Object.keys(arr)
        keys.sort((a, b) => a - b);
        newArr = keys.map((item, i) =>
            <div className={s.colorBox} style={{
                "backgroundColor": `${arr[item]}`
            }}>
                {(i === 0 || i === keys.length - 1)
                && <span className={s.legendeNum} style={i !== 0 ? numStyle : {float: "right"}}>{keys[i]}</span>}
            </div>
        )
    }
    getStyle();
    return (
        <div className={s.wrapp}>
            <div>
                <span className={s.title}>Gesamtkrankenstand</span>
                <div className={s.colorWrapp}>
                    {newArr.map(item => item)}
                </div>
            </div>
        </div>
    );
};

export default NewLegend;
