import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Plus from './components/plus';

function App() {
    const [arr, setArr] = useState([]);

    function plusButton(index) {
        const test = [...arr];
        test[index] = test[index]+1;
        setArr(test)
    }

    function minusButton(index) {
        const test = [...arr];
        test[index] = test[index]-1;
        setArr(test)
    }

    function addPlus() {
        const test = [...arr, 0];
        setArr(test)
    }

    return (
        <div className="App">
            {arr.map((x, i) => (
                <Plus val={x} index={i} onClickPlus={plusButton} onClickMinus={minusButton}/>
            ))}

            <button onClick={addPlus}>add</button>
        </div>
    );
}

export default App;
