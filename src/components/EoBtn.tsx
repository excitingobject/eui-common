import { clsx } from "clsx";
import { FC } from "react";

const EoBtn: FC<EO.BtnProps> = (props) => {
    const attr = {
        ...props,
        className: clsx('eo-btn', props.className, {
            outline: props.outline,
            selected: props.selected,
            active: !props.disabled,
            disabled: props.disabled
        }),

        outline: undefined,
        selected: undefined,
    } as ReactHtml.Button

    return <button {...attr}>{props.children}</button>
}

export default EoBtn