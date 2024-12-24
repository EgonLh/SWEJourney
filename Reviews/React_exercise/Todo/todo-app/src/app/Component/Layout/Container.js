"use client"
import { MoreHorizontal, Plus, Edit2 } from 'lucide-react'
import Todo from "../Todo";



export default function Container() {

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-300 to-blue-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md overflow-hidden">
                <header className="bg-gray-800 text-white p-3 flex items-center justify-between">

                    <div className="flex justify-between items-center w-full">
                        <div className={" flex items-center space-x-4"}>
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-blue-500 font-bold">
                                    <img src="https://i.pinimg.com/736x/75/19/0f/75190f21fcdfd8ac5cca422f1d7b1c60.jpg" alt="" srcset="" class={"rounded"}/>
                                </span>
                            </div>
                            <span className="font-semibold text-md font-mono hover:animate-pulse">Short Notes</span>

                        </div>
                        <div>
                            <button className="rounded-full w-6 h-6 flex items-center justify-center" >
                                <MoreHorizontal className="w-4 h-4" />

                            </button>
                        </div>

                    </div>
                </header>

                <main className="p-6">
                    <div className=" w-full ">
                        <Todo/>
                    </div>
                </main>
            </div>
        </div>
    )
}