import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from './navbar/navbar';
import Summary from './summary/summary';
import About from './about/about';
import { Projects } from './Projects/Projects';
import { Contact } from './Contact/Contact';
import { Experience } from './Experience/Experience';
import Certificates from './Certificates/certificates';
function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Summary/>
      <About />
      <Experience/>
      <Certificates />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
