'use client'
import { useCallback } from 'react'

export default function useLocalStorage() {
    const get = useCallback((chave: string) => {
        const valorLocal = window?.localStorage?.getItem(chave)
        return valorLocal ? JSON.parse(valorLocal) : null
    }, [])

    const set = useCallback((chave: string, valor: any) => {
        window?.localStorage?.setItem(chave, JSON.stringify(valor))
    }, [])

    return { get, set }
}
