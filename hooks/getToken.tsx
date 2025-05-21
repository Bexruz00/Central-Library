"use client"
import { Context } from '@/context/Context'
import { useContext } from 'react'

const GetToken = () => {
    const {token, setToken, collapsed, setCollapsed} = useContext(Context)
  return { token, setToken, collapsed, setCollapsed }
}

export default GetToken