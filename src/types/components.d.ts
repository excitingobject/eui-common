declare namespace Eo {
    interface Common<Props> {
        properties?: Props
    }

    interface BtnProps extends Common<BtnProps>, ReactHtml.Button {
        outline?: boolean
        active?: boolean
    }

    interface CheckboxProps<D = any> extends Common<CheckboxProps>, Data.CodeData<D>, ReactHtml.Input { }

    interface InputProps extends Common<InputProps>, ReactHtml.Input { }

    interface OptionProps<D = any> extends Common<OptionProps<D>>, Data.CodeData<D>, ReactHtml.Option { }

    interface SelectProps<D = any> extends Common<SelectProps<D>>, Data.CodeListData<D>, ReactHtml.Select {
        placeholder?: string
    }
}
