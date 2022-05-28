import Mail from '../assets/mail.png'


const Footer = () => {

return (
    <div id="" className="w-full bg-black pt-12 pb-12">
        <div className="text-white">
            <p className="text-base md:text-lg">©️2022 , Valor of Knightfall</p>
            <p className="text-base md:text-lg">All Rights Reserved</p>
            <a href="mailto:knightfallnft@protonmail.com" className="text-center"><img className="mx-auto transform hover:scale-110" src={Mail} alt="Mail Icon" width="50"></img></a>
        </div>
    </div>

)
}
    
export default Footer;