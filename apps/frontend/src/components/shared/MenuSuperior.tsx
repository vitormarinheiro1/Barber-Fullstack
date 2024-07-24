'use client'

import Link from "next/link"
import Logo from "./Logo"
import MenuUsuario from './MenuUsuario'
import useUsuario from '@/data/hooks/useUsuario'

export default function MenuSuperior() {
    const { usuario } = useUsuario()
    
    return (
        <header>
            <nav>
                <Logo />
                <div>
                    {usuario ? (
                        <MenuUsuario usuario={usuario} />
                    ) : (
                        <Link href="/entrar">Entrar</Link>
                    )}
                </div>
            </nav>
        </header>
    )
}