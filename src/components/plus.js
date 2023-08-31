import {useState} from 'react';


function Plus(prop) {
    // let count = 0;
    const [count, setCount] = useState(0);
    console.log(prop)
    function plusButton() {
      prop.onClickPlus(prop.index);
    }

    function minusButton() {
        prop.onClickMinus(prop.index);
    }

    return (
        <div style={{display: 'flex'}}>
            <button onClick={minusButton}>-</button>
            <div>{prop.val}</div>
            <button onClick={plusButton}>+</button>
        </div>
    );
}

export default Plus;
