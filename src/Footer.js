import fb from "./assets/fb.svg.png";
import ig from "./assets/ig.svg.png";
import github from "./assets/github.png";

function Footer() {
return(

    <footer className="bg-gray-800 text-white p-4">
        <p className="flex justify-center items-center text-center">
            © 2025 E-Commerce App
            <img src={fb} alt="fb" className="ml-2"/> 
            <img src={ig} alt="ig" className="ml-2"/>
            <img src={github} alt="github" className="w-9 h-9"/></p>
    </footer>
);
}
export default Footer;