import { Fragment } from "react";
import MainHeader from "./main-header";

const Layout=props=>{
    return(

        <Fragment>
        <MainHeader/>
            {props.children}
        </Fragment>
    );
}

export default Layout;