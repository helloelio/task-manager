import { Link } from 'react-router-dom';

export default function NotFound(props) {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#252525',
    margin: '0',
    fontSize: '3rem',
    textAlign: 'center',
  };
  const linkStyle = {
    textDecoration: 'underline',
    color: 'rgb(0, 154, 198)',
  };
  return (
    <div style={style}>
      <h1>{props.title}</h1>
      <Link to='/tasks/myday' style={linkStyle}>
        Return back
      </Link>
    </div>
  );
}
