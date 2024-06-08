import React from 'react'
import { Tooltip } from '@mui/material'
import { IoMdMenu } from "react-icons/io";
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useStateContext } from '../context/ContextProvider';
import avatar from '../data/avatar.jpg'
import Cart from './Cart';
import Chat from './Chat';
import Notification from './Notification';
import UserProfile from './UserProfile';
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <Tooltip title={title} placement="bottom" arrow >
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-zinc-200"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            {icon}
        </button>
    </Tooltip>
);
const Navbar = () => {
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked } = useStateContext()

    const handelActiveMenu = () => setActiveMenu(!activeMenu)
    return (
        <div className='w-[97%] flex justify-between'>
            <NavButton title={"Menu"} icon={<IoMdMenu />} color={currentColor} customFunc={handelActiveMenu} />
            <div className='flex'>
                <NavButton title={"Cart"} icon={<FiShoppingCart />} color={currentColor} customFunc={() => handleClick('cart')} />
                <NavButton title={"Chat"} dotColor="#03C9D7" icon={<BsChatLeft />} color={currentColor} customFunc={() => handleClick('chat')} />
                <NavButton title={"Notification"} dotColor="rgb(254, 201, 15)" icon={<RiNotification3Line />} color={currentColor} customFunc={() => handleClick('notification')} />
                <Tooltip title={"Profile"} placement='bottom' arrow >
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                        onClick={() => handleClick('userProfile')}
                    >
                        <img src={avatar} className='rounded-full w-8 h-8' alt='user-profile' />
                        <p>
                            <span className="text-gray-400 text-14">Hi,</span>{' '}
                            <span className="text-gray-400 font-bold ml-1 text-14">
                                Michael
                            </span>
                        </p>
                        <MdKeyboardArrowDown />
                    </div>
                </Tooltip>
            </div>
            {isClicked.cart && (<Cart />)}
            {isClicked.chat && (<Chat />)}
            {isClicked.notification && <Notification/>}
            {isClicked.userProfile && (<UserProfile />)}
        </div>
    )
}

export default Navbar
