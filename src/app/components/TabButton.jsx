import React from 'react'

const TabButton = ({ active, selectTab, children }) => {

    const buttonClasses = active ? 'text-white border-b border-[#e56850]' : 'text-[#adb7be]'

    return (
        <button onClick={selectTab} className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </button>
    )
}

export default TabButton