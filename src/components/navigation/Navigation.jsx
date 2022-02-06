import './Navigation.css';
import Profile from './profile/Profile';
import Search from './search/Search';
import PocketsList from './pockets/PocketsList';

function Navigation(props) {
  return (
    <nav className='navigation'>
      <header className='header'>
        <Profile />
        <Search />
      </header>
      <section className='pockets-list'>
        <PocketsList
          pockets={props.pockets}
          handlerSetPocketName={props.handlerSetPocketName}
        />
      </section>
      <footer>
        <button
          onClick={() => props.modalOpen('POCKET')}
          className='btn'
          title='Click to add new Pocket section'
        >
          + Add new pocket
        </button>
      </footer>
    </nav>
  );
}
export default Navigation;
