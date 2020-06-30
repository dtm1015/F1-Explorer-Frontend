import Link from 'next/link'

function MenuIcon(props){
  const iconUrl = `${props.iconName}-icon.png`;
  const text = `${props.text}`

  return (
    <div className="menu-icon">
      <Link href="/">
        <a id="iconLink">
          <img className="icon" src={iconUrl} alt="icon"/>
        </a>
      </Link>

      <Link href="/">
        <a>{text}</a>
      </Link>
    </div>
  )
}

export default MenuIcon;
