import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import { Badge, CarTaxiFront, User2 } from "lucide-react";
import { LogOut } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";

const Navbar = () => {

  const { user, logout} = useAuth()

  return (
    <div className="flex justify-between  px-8 py-3 items-center">
      <h1 className="font-semibold text-2xl"><span className="text-orange-700"></span></h1>
      <div className="flex items-center gap-10">
        <ul className="flex gap-8 cursor-pointer">
          <Link to="/" className="text-sm">Home</Link>
         { user && <Link to="/orders" className="text-sm">Orders</Link>}
          <Link to = "/shop" className="text-sm">Shop</Link>
        </ul>

        {
        !user ?
        <div className="space-x-3">
          <Link to = "/login"> <Button variant='outline' > Login </Button></Link>
          <Link to = "/signup"> <Button className='bg-blue-600 hover:bg-blue-700'> Signup </Button> </Link>
        </div>:
        <Popover>
        <PopoverTrigger>
          <Avatar className='cursor-pointer '>
          <AvatarFallback className="bg-blue-600"> 
             <h1 className="text-md font-semibold capitalize text-white ">{user?.fullname[0]}</h1></AvatarFallback>     {/* name here */}
         </Avatar>
        </PopoverTrigger>
         <PopoverContent className="mr-2">
         <div>
          <div className="flex items-center gap-2">
          </div>
          <h1 className="text-md font-semibold capitalize">{user?.fullname}</h1>
           <div className="space-y-1 mt-2">
            
            {user?.role == 'owner' && 
           <div className="flex items-center gap-1 my-2 text-blue-600"><Link to="/allorders">View Orders</Link></div>
            }
           <div className="flex items-center gap-1"><LogOut /><Button onClick = {()=>logout()} variant="link">Log out</Button></div>
           </div>
          </div>
         </PopoverContent>
        </Popover>    
}   
      </div>
    </div>
  );
};

export default Navbar;
