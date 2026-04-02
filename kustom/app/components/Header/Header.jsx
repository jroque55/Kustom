'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import './Header.css'
import Link from 'next/link'

const Header = () => {
    const router = useRouter()
    return (
        <header className="header-container">
            <div className="header-logo">
                <Image src="/sinFondo.png" alt="Logo" width={100} height={80} />
            </div>
            <div className="header-nav-container">
                <nav className="header-nav">
                    <Link href="#servicios" className="header-nav-item">
                        Servicios
                    </Link>
                    <Link href="#about-us" className="header-nav-item">
                        Sobre nosotros
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header