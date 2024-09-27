import { clsx } from "clsx";
import { FC } from "react";

const EoBtn: FC<Eo.BtnProps> = (props) => {
    const options:Eo.BtnProps = {
        ...props,
        ...props.options
    }

    const attr = {
        ...options,
        className: clsx('eo-btn', options.className, {
            outline: options.outline,
            active: options.active,
            disabled: options.disabled
        }),
        outline: undefined,
        active: undefined,
    } as ReactHtml.Button

    return <button {...attr}>{props.children}</button>
}

export default EoBtn