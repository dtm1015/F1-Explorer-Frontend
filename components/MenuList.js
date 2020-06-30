import MenuIcon from "./Menu-Icon.js"

function MenuList(){
  return (
    <ul id="MenuList">
      <li>
        <MenuIcon iconName="home" text="Home"/>
      </li>

      <li>
        <MenuIcon iconName="flag" text="Explore Races"/>
      </li>

      <li>
        <MenuIcon iconName="globe" text="Explore Circuits"/>
      </li>

      <li>
        <MenuIcon iconName="phone" text="Contact"/>
      </li>
    </ul>
  )
}

export default MenuList;
