import { ReactComponent as Github } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/emircalife%22%3E" target="_blank" rel="noreferrer" >
                        <div className="dsmovie-contact-container">
                            <Github />
                            <p className="dsmovie_contact-link">/Henrique8m</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;