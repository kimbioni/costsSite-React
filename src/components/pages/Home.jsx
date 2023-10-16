// import {useRef} from 'react'
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'


function Home () {

    return (
        <section className={styles.home_container}>
            <div className={styles.home_content}>
                <h1>Bem-vindo ao <span>Costs</span></h1>
                <p>Comece a gerenciar os projetos agora mesmo!</p>
                <LinkButton to='/newproject' text='Criar Projeto' />
            </div>
            <img src={savings} alt="Costs" />
        </section>
    )

}

export default Home