import  {useState, useEffect} from 'react'

import styles from './Message.module.css'

function Message({type, msg}) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if(!msg) {
            setVisible(false)
            return
        }

        setVisible(true)
        
        const timer = setTimeout(() => {
             setVisible(false)
        }, 3000) //valor em ms

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <> 
         {visible && //if visible
             (<div className={`${styles.message} ${styles[type]}`}>{msg}</div>)}
        </>
    )

}   

export default Message 