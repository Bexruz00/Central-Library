"use client"
import { instance } from "@/hooks/instance"
import { useEffect, useState } from "react"

const getRequest = (api:string) => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        instance().get(api).then(res => setData(res.data))
    }, [])

    return data
}

export default getRequest

