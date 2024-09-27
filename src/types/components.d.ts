declare namespace Eo {
    interface Common<Props> { 
        options?: Props 
    }

    interface BtnProps extends Common<BtnProps>, ReactHtml.Button {
        outline?: boolean
        active?: boolean
    }
}
