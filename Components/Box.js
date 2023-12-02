import styles from '../styles/Box.module.css';

const Box = ({title, text}) => {
    return (
        <>
            <div className={styles.box}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>{text}</p>
            </div>
        </>
    );
}
 
export default Box;