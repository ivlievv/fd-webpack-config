import styles from '../css/style.scss';
const greeting = document.createElement( 'h1' );

fetch('employees.json')
  .then(response => {
    return response.json()
  })
  .then(console.log)
  .catch(console.error);


greeting.innerText = 'Test test test';

greeting.classList.add( styles.test );

document.body.appendChild( greeting );

