import { clsx } from "clsx";
import { FC } from "react";

const EoBtn: FC<EO.BtnProps> = (props) => {
    const attr = {
        ...props,
        className: clsx('eo-btn', props.className, {
            round: props.round,
            outline: props.outline,
            active: props.active
        }),

        round: undefined,
        outline: undefined,
        active: undefined,
    } as ReactHtml.Button

    return <button {...attr}>{props.children}</button>
}

export default EoBtn