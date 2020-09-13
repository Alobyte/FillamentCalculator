import React, { useState } from 'react'
import MainMenu from './MainMenu'

function BasePlate(){
    const [showMenu, setShowMenu] = useState(false);

    let menu;

    if(showMenu){
        menu = 
        <MainMenu></MainMenu>
    }

    else{
        menu = 

        <div className="flex h-screen">
            <div className="m-auto">
                <button 
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-6 px-12 border-b-4 border-blue-700 hover:border-blue-500 rounded max-w-6xl"
                    onClick={() => setShowMenu(true)}
                >
                    Get Started
                </button>
            </div>
        </div>
    }

    return(
        <div className="border-solid">
            { menu }
        </div>
    )
}

export default BasePlate;