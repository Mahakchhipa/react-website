import Image from 'next/image'
import React from 'react';
import logo from '../../../public/img/logo.webp';
const Navbar = () => {
    return (
        <div>
            <div>
                <nav>
                    <Image
                        src={logo}
                        height={200}
                        width={200}
                        alt='logo-img'
                    />
                   
                </nav>
            </div>
        </div>
    )
}

export default Navbar
