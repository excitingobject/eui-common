declare namespace Eo.Data {
    type CodeType<D = any> = {
        selected?: boolean
        disabled?: boolean
        label?: string
        order?: number        
        data?: D
    }
    interface CodeData<D = any> extends CodeType<D> {
        _on_selected?: (code: Data.CodeType<D>) => void
    }
    interface CodeListData<D = any> {
        codes?: CodeData<D>[];
        multiple?: boolean

        _on_selected?: (code: Data.CodeType<D>) => void
        _on_multi_selected?: (codes: Data.CodeType<D>[]) => void
    }
}