import { useState } from "react"
import styles from "./Accordion.module.css"




function Accordion(){


    const [show,setShow] = useState([{name: 'accordion1', isShow: false, body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                                     {name: 'accordion2', isShow: false,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                                     {name: 'accordion3', isShow: false,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]);
   


    function handleClick(show,index){
        setShow(show.map((item,id) => id === index? {...item, isShow: !item.isShow} : item))
    }

    
    const renderItem = show.map((item,id)=> 
            <>
               <div className={styles[item.isShow ? ['accordion-main-active'] : ['accordion-main-inactive']]}> 
                <div className={styles["accordion-header"]} key={id}>
                        <h5>{item.name}</h5>
                    <button onClick={() => handleClick(show, id)}>show</button>
                    </div>
                    <div className={styles[item.isShow ? ['accordion-body-active'] : ['accordion-body-inactive']]}>
                        <p className={styles['accordion-animate']}>{item.body}</p>
                    </div>
               </div>
            </>
    )


    return(<>   

        <div className={styles['accordion-container']}>
           {renderItem}
        </div>

    </>)

}


export default Accordion

