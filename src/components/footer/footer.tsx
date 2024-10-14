//Next
import Image from 'next/image';

//Images
import Icon from '@/assets/images/icon.png';

const Footer: React.FC = () => {
    return(
        <footer className='m-12'>
            <hr />
            <div className='flex items-center justify-center'>
            <Image priority className='w-16 p-2' src={Icon} alt='icone do menu' />
            <p className="text-center">&copy;All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;