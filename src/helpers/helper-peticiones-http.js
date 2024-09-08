export const helperPeticionesHttp = async (url, options) => {
    try {
        const res = await fetch(url, options )
        if (!res.ok) throw new Error('Mo se pudo realizar la peticion', res.status)
        const data = await res.json()
        return data

    } catch (error) {
        console.error('[helperPeticionesHttp]', error)
    }
}