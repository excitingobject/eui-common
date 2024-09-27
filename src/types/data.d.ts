declare namespace Eo.Data {
    type CodeType<Data = any> = {
        selected?: boolean
        disabled?: boolean
        label?: string
        order?: number
        data?: Data
    }
    type CodeListType<Data = any> = CodeType<Data>[]
}