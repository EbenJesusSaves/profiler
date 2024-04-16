import React, { ReactNode } from "react";
import { Meteors } from "../ui/meteors";
import { LiaAwardSolid } from "react-icons/lia";

interface Met {
    icon: ReactNode
    mainText: string
    subText: string
    btNText: string
}

export function MeteorsComp({ icon, mainText, subText, btNText }: Met) {
    return (
        <div className=" ">
            <div className=" flex   h-3/4 md:h-1/2 w-3/4 items-center  justify-center  relative max-w-sm">
                <div className=" absolute inset-0  h-full w-full  bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl  bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
                    <div className="flex flex-col justify-center items-center text-center">

                        {icon}
                    </div>


                    <h1 className="font-bold text-xl text-white text-center mb-4 relative z-50">
                        {mainText}
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                        {subText}
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                        {btNText}
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div >
    );
}
