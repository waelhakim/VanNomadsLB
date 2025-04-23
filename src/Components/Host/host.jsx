import { Outlet } from "react-router"
export default function Host(){
    return(
        <div>
            <h1>This is the host page</h1>
            <Outlet/>
        </div>
    )
}