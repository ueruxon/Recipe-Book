import React from 'react'

const Sidebar = (props) => {
   return (
       <aside className="sidebar">
           <h1>Add New Recipe</h1>
           {props.children}
       </aside>
   )
}

export default Sidebar;