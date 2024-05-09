import { useState } from 'preact/hooks';

export default function Greeting({ messages, children, className = ''}) {

    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div className={className + " rounded border p-3 my-2 flex justify-between items-center"}>
            <div className="">
                <p className="italic">{children}</p>
                <h1 className="text-lg font-extrabold text-gray-900 dark:text-white md:text-lg lg:text-lg"><span className="underline underline-offset-3 decoration-2 decoration-blue-400 dark:decoration-pink-600">{greeting}!</span> Nice to see you</h1>
            </div>
            <button onClick={() => setGreeting(randomMessage())} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    New Greeting
                </span>
            </button>
        </div>
    );
}