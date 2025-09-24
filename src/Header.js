import profilepic from "./assets/profilepic.jpg";

function Header() {
return(
    <header className="bg-gradient-to-r from-red-500 to-blue-500 text-white p-4">
    <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
        <div className="flex items-center sm:col-start-1">
        </div>
    <div className="sm:col-start-2 sm:col-span-1 flex justify-center">
        <h1 className="text-2xl sm:text-3xl">E-Commerce App</h1>
    </div>
</div>
    </header>
);
}
export default Header;