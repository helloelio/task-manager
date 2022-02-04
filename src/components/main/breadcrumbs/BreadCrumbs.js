export default function Breadcrumbs(props) {
  // const symbols = '@#$%^&*_-=№';

  // const randomSymbol = Math.floor(Math.random() * (symbols.length - 1) + 1);

  const style = {
    position: 'fixed',
    top: '0',
    left: '240px',
    right: '0',
    padding: '0.5rem',
    boxShadow: '0 0 5px 0 #000',
    backgroundColor: '#252525',
    zIndex: '100',
  };
  const styleBreadcrumbs = {
    backgroundColor: '#00b1e3',
    boxShadow: '0 0 5px 0 #000',
    padding: '2.5px',
    cursor: 'pointer',
    textDecoration: 'underline',
  };
  console.log();
  return (
    <div style={style}>
      {/* <span style={styleSymbol}>{symbols[randomSymbol]}</span> */}
      <span
        style={styleBreadcrumbs}
        onClick={props.scrollToTop}
        title='Click to scroll top'
      >
        tasks/{props.breadcrumbs}
      </span>
    </div>
  );
}
