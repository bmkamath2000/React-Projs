import SubComponent from './SubComponent.jsx';
function NavBar(props) {
  return (
    <>
    <nav>
      <ul>
        <li><a href={props.link1}>Link1</a></li>
        
      </ul>
    </nav>
    <SubComponent {...props}/>
    </>
  );
}

export default NavBar;
