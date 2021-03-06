import './Navigation.css';
import Profile from './profile/Profile';
import Search from './search/Search';
import PocketsList from './pockets/PocketsList';
import CreateButton from '../../UI/CreateButton';

function Navigation(props) {
  return (
    <nav className={props.navMenuStatus ? 'navigation navigation-mobile' : 'navigation'}>
      <header className='header'>
        <Profile
          loginName={props.loginName}
          handlerLogout={props.handlerLogout}
          handlerOpenNavMenu={props.handlerOpenNavMenu}
        />
        <Search />
      </header>
      <section className='pockets-list'>
        <PocketsList
          pockets={props.pockets}
          handlerSetPocketName={props.handlerSetPocketName}
          handlerOpenNavMenu= {props.handlerOpenNavMenu}
        />
      </section>
      <footer>
        <CreateButton
          name='POCKET'
          text='+ Add new pocket'
          modalOpen={props.modalOpen}
        />
      </footer>
    </nav>
  );
}
export default Navigation;
