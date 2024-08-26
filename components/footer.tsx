import { Facebook, Instagram } from "lucide-react"
import { Input } from "./ui/input"

const Footer=()=>{
    return(
        <main className="mt-3 border bg-white rounded">
            <div className="grid grid-cols-2 grid-rows-1 gap-3 bg-[#FFEAAA] p-4">
                <div>
                    <p className="font-semibold">Have a question about Tyres?</p>
                    <span className="text-xs mt-1">Get an answer in 24 hours from our experts.</span>
                    <Input placeholder="Ask or search your question" className="shadow-custom-yellow rounded-full mt-4 pl-6 border border-[#FFCA28]"/>
                </div>
                <div className="flex justify-center">
                    <img className="h-20 " src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"/>
                </div>
            </div>
            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full p-4 lg:py-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-8 py-6 max-sm:max-w-sm max-sm:mx-auto gap-y-6">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <a href="/" className="flex justify-center lg:justify-start">
                            <img alt="logo" src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512"/>
                        </a>
                       <div className="flex gap-2 justify-center md:justify-start items-center mt-4 ml-3 cursor-pointer">
                       <Facebook className="h-8 w-9 text-gray-400"/>
                       <Instagram className="h-8 w-8 text-gray-400" />
                       </div>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-2"><a href="#"  className=" text-gray-600 hover:text-gray-900">Who We Are </a></li>
                            <li className="mb-2"><a href="#"  className="text-gray-600 hover:text-gray-900">Are you a Tyre Dealer? </a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-2"><a href="#"  className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#"  className=" text-gray-600 hover:text-gray-900">Terms of use </a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-2"><a href="#"  className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                            <li className="mb-2"><a href="#"  className=" text-gray-600 hover:text-gray-900">Career </a></li>
                            <li className="mb-2"><a href="#"  className=" text-gray-600 hover:text-gray-900">Shipping & Return Policy </a></li>
                        </ul>
                    </div>
                    
                </div>
                <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
                <div className="sm:flex sm:items-center sm:justify-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
                    </span>
                    
                </div>
                </div>
            </footer>                         
        </main>
    )
}

export default Footer