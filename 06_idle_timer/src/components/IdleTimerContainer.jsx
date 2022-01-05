import React, { useRef, useState } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const IdleTimerContainer = () => {

    const idleTimerRef = useRef(null)
    const sessionTimeOutRef = useRef(null)

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const onIdle = () => {
        setModalIsOpen(true)
        sessionTimeOutRef.current = setTimeout(logOut, 5000)
    }

    const stayActive = () => {
        clearTimeout(sessionTimeOutRef.current)
        setModalIsOpen(false)
    }

    const logOut = () => {
        setIsLoggedIn(false)
        setModalIsOpen(false)
        clearTimeout(sessionTimeOutRef.current)
    }

    return (
        <div>
            {isLoggedIn ? <h2>Hello Eyad</h2> : (
                <h2>Hello Guest</h2>
            )}

            <Modal isOpen={modalIsOpen}>
                <h2>You have been idle for a while</h2>
                <p>You will be logged out soon</p>
                <div>
                    <button 
                    onClick={logOut}
                    >
                        Log me out
                    </button>
                    <button 
                    onClick={stayActive}
                    >
                        Keep me signed in
                    </button>
                </div>
            </Modal>
            <IdleTimer 
            ref={idleTimerRef}
            timeout={5 * 1000}
            onIdle={onIdle}
            >

            </IdleTimer>
        </div>
    )
}

export default IdleTimerContainer
