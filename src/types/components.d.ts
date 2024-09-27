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

    interface OptionProps<Data = any> extends Data.CodeType<Data>, ReactHtml.Option {
        _on_selected?: (selected: Data.CodeType<Data>) => void
    }

    interface SelectProps<Data = any> extends Common<SelectProps<Data>>, ReactHtml.Select {
        options?: Data.CodeListType<Data>
        placeholder?: string

        _on_selected?: (selected: Data.CodeType<Data>) => void
    }
}
