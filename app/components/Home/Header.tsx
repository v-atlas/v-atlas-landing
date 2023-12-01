const Header = () => {
  return ( 
    <header className="h-20 pt-5 bg-black text-antiflash-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-5">
        <h2 className="font-bold text-3xl italic">V-Atlas</h2>
        <button className="p-4 bg-honolulu-blue text-antiflash-white rounded-lg">Join the waitlist</button>
      </div>
    </header>
   );
}
 
export default Header;