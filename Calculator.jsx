import React,{ useState } from 'react'
import style from './calculator.module.css'


const Calculator = () => {

    const[value,setValue]= useState('')

        function Cal(e){
            setValue(value + e.target.innerHTML)
        }
        function eql(){
            setValue(eval(value))
        }
        function del(){
            setValue("")
        }
    return (
        <div>
            <div className={style.Calculator}>
                <div className={style.div1}>
                    <input type="text"placeholder={value} />
                </div>
                <div className={style.div2}>
                    <div className={style.d1} onClick={Cal}>+</div>
                    <div className={style.d1} onClick={Cal}>-</div>
                    <div className={style.d1} onClick={Cal}>*</div>
                    <div className={style.d1} onClick={Cal}>/</div>
                </div>
                <div className={style.div3}>
                    <div className={style.d1} onClick={Cal}>7</div>
                    <div className={style.d1} onClick={Cal}>8</div>
                    <div className={style.d1} onClick={Cal}>9</div>
                </div>
                <div className={style.div3}>
                    <div className={style.d1} onClick={Cal}>4</div>
                    <div className={style.d1} onClick={Cal}>5</div>
                    <div className={style.d1} onClick={Cal}>6</div>
                </div>
                <div className={style.div3}>
                    <div className={style.d1} onClick={Cal}>1</div>
                    <div className={style.d1} onClick={Cal}>2</div>
                    <div className={style.d1} onClick={Cal}>3</div>
                </div>
                <div className={style.div3}>
                    <div className={style.d1} onClick={Cal}>0</div>
                    <div className={style.d1} onClick={Cal}>.</div>
                    <div className={style.d1} onClick={del}>AC</div>
                </div>
                <div className={style.div4} onClick={eql}>=</div>
            </div>
        </div>
    )
}

export default Calculator