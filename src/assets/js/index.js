import styles from '../css/style.scss';
import test from  '../../style.css';
const greeting = document.createElement( 'h1' );

greeting.innerText = 'Test test test';

greeting.classList.add( styles.test, test.class );

document.body.appendChild( greeting );

