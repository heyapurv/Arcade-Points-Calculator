import React from "react"

const Loader = () => {
  

    return (
        <div className="flex items-center justify-center ">
         <div className="relative flex items-center justify-center w-16 h-16">
        <div className="absolute w-full h-full border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
      </div>
    )
}

export default Loader