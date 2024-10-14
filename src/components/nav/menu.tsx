//Next
import Image from 'next/image';

//Images
import Icon from '@/assets/images/icon.png';

//Animates
import 'animate.css';

const Menu: React.FC = () =>{
    return(
        <nav className="flex items-center justify-around p-12">
            <Image priority className='animate__animated animate__flip' src={Icon} alt='icone do menu' />
        </nav>
    )
} 

export default Menu;