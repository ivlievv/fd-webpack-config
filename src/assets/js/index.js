import styles from '../css/style.scss';

const greeting = document.createElement( 'h1' );

greeting.innerText = 'Test test test';

greeting.classList.add( styles.test );

document.body.appendChild( greeting );

