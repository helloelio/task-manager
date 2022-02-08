export default function PocketBackground(props) {
  const bg = {
    backgroundImage: `url('${props.image}')`,
    height: '250px',
    width: '100%',
    position: 'absolute',
    top: '35px',
    left: '0',
    backgroundSize: '100%',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  };

  return <div className='pocket-bg' style={bg}></div>;
}
