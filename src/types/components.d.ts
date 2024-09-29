declare namespace Eo {
    interface Common<Props> {
        properties?: Props
    }

    interface BtnProps extends Common<BtnProps>, ReactHtml.Button {
        outline?: boolean
        active?: boolean
    }

    interface InputProps extends Common<InputProps>, ReactHtml.Input {

    }

    interface OptionProps<D = any> extends Common<OptionProps<D>>, ReactHtml.Option {
        code?: Data.CodeType<D>
    }

    interface SelectProps<D = any> extends Common<SelectProps<D>>, ReactHtml.Select {
        options?: Data.CodeType<D>[]
        placeholder?: string

        _on_selected?: (code: Data.CodeType<D>) => void
        _on_multi_selected?: (codes: Data.CodeType<D>[]) => void
    }
}
