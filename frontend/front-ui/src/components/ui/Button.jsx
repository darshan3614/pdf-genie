export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`px-5 py-2.5 rounded-xl bg-white text-black font-medium border border-gray-300 shadow-md
                  transition-all duration-200 hover:bg-purple-500 hover:text-white active:scale-95 
                  focus:ring-2 focus:ring-purple-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
