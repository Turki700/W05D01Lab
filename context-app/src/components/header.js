import React, {useContext} from "react";
import {DataContext} from '../App'


const Header = () => {

    const data = useContext(DataContext)
    return ( 
        <div>
            <div>{data.title}</div>
            <img src={data.img} alt="" />
        </div>
     );
}
 
export default Header;