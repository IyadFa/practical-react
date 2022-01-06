import React, {useState} from 'react'

const Btn = () => {

    const [isActive, setIsActive] = useState(false)

    const toggleClass = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <button onClick={toggleClass} className={isActive ? `btn animating` : `btn`}>Submit</button>
            <div class="checkmark-container">
                <svg x="0px" y="0px" fill="none" className="checkmark-svg" viewBox="0 0 25 30">
                <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
            </svg>
            </div>
        </>
    )
}

export default Btn
