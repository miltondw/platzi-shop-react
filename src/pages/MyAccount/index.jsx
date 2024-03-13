import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export default function MyAccont() {
    const context = useContext(ShoppingCartContext);
  return (
    <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md">
    <div className="flex items-center">
      <img
        src="https://robohash.org/stefan-one" 
        alt="Avatar"
        className="w-16 h-16 rounded-full border-2 border-white object-cover mr-2"
      />
      <div className="mr-4">
        <div className="font-bold text-slate-900 dark:text-white">
          {context.userData?.username}
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {context.userData?.email}
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {context.userData?.password}
        </div>
      </div>
    </div>
  </div>

  )
}
