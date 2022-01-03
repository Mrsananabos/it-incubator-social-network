export const requiredField = (value: string) => {
    debugger
    if (value) return undefined
    return 'field is required'
}

export const maxLength = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}

export const maxFieldLength100 = maxLength(100)
export const maxFieldLength30 = maxLength(30)