import { clsx } from "clsx";
import { FC } from "react";

const EoCheckbox: FC<Eo.CheckboxProps> = (props) => {
    const properties: Eo.InputProps = {
        ...props,
        ...props.properties
    }
    const attr = {
        ...properties,
        type: 'checkbox',
        className: clsx('eo-checkbox', properties.className)
    } as ReactHtml.Input
    return <input {...attr} />
}

export default EoCheckbox