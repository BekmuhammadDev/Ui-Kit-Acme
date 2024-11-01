import { createBrowserRouter } from "react-router-dom";
import{Public,Authorization} from "../layouts"
import{Home,Profile,Posts,Followers} from "../pages"


const router=[{
    path:"/",
    element:<Public/>,
    children:[
        {path:"/",element:<Home/>},
        {path:"/profile",element:<Profile/>},
        {path:"/posts",element:<Posts/>},
        {path:"/followers",element:<Followers/>},
    ]
},
{
    path:"/login",
    element:<Authorization/>,
}
];

export const appRouter=createBrowserRouter(router);