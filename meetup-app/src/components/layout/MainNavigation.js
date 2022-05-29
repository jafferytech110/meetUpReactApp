import { Link } from 'react-router-dom'
import classed from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classed.header}>
            <div className={classed.logo}><h1 className={classed.logoh1}>React Meetups</h1></div>
            <nav>
                <ul>
                    {/* here we use link hook instead of href */}
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation