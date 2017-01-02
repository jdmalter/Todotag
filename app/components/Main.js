var React = require('react')

var styles = {
   main: {
      marginTop: '72px'
   },
   navbar: {
      background: 'rgba(204, 0, 0, 1)',
      boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)'
   },
   container: {
      margin: '0px'
   },
   brand: {
      color: 'rgba(255, 255, 255, 1)'
   },
   iconBar: {
      color: 'rgba(255, 255, 255, 1)'
   }
}

var title = 'Todotag'

function NavbarLink(props) {
   return <li>
      <a href={props.href}>{props.text}</a>
   </li>
}

function IconBar() {
   return <span className='icon-bar' style={styles.iconBar}/>
}

function Navbar() {
   return (
      <div>
         <nav className='navbar navbar-default navbar-fixed-top' style={styles.navbar}>
            <div className='container' style={styles.container}>
               <div className='navbar-header'>
                  <a className='navbar-brand' href='#' style={styles.brand}>{title}</a>
                  <a className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                     <IconBar/>
                     <IconBar/>
                     <IconBar/>
                  </a>
               </div>
               <div className='navbar-collapse collapse'>
                  <ul className='nav navbar-nav'>
                     <NavbarLink href='#/View' text='View'/>
                     <NavbarLink href='#/Edit' text='Edit'/>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}

function Main(props) {
   return (
      <div style={styles.main}>
         <Navbar/>
         <div>
            {props.children}
         </div>
      </div>
   )
}

module.exports = Main