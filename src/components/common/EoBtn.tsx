import { clsx } from "clsx";
import { FC } from "react";

const EoBtn: FC<Eo.BtnProps> = (props) => {
    const properties:Eo.BtnProps = {
        ...props,
        ...props.properties
    }

    const attr = {
        ...properties,
        className: clsx('eo-btn r5', properties.className, {
            outline: properties.outline,
            active: properties.active
        }),
        outline: undefined,
        active: undefined,
    } as ReactHtml.Button

    return <button {...attr}>{properties.children}</button>
}

export default EoBtn