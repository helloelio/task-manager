export default function DragIcon(props) {
  const style = {
    cursor: 'grab',
    transition: '.5s ease',
    opacity: props.active ? 1 : 0,
  };

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style}
    >
      <path
        d='M7 4C7 4.55228 7.44772 5 8 5C8.55228 5 9 4.55228 9 4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4Z'
        stroke='gray'
        strokeWidth='2'
      />
      <path
        d='M15 4C15 4.55228 15.4477 5 16 5C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4Z'
        stroke='gray'
        strokeWidth='2'
      />
      <path
        d='M7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12Z'
        stroke='gray'
        strokeWidth='2'
      />
      <path
        d='M15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12Z'
        stroke='gray'
        strokeWidth='2'
      />
      <path
        d='M7 20C7 20.5523 7.44772 21 8 21C8.55228 21 9 20.5523 9 20C9 19.4477 8.55228 19 8 19C7.44772 19 7 19.4477 7 20Z'
        stroke='gray'
        strokeWidth='2'
      />
      <path
        d='M15 20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19C15.4477 19 15 19.4477 15 20Z'
        stroke='gray'
        strokeWidth='2'
      />
    </svg>
  );
}
