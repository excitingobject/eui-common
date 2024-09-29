import { clsx } from "clsx"
import { FC } from "react"

const EoInput: FC<Eo.InputProps> = (props) => {

    const properties: Eo.InputProps = {
        ...props,
        ...props.properties
    }
    const attr = {
        ...properties,
        className: clsx('eo-input outline r5', properties.className)
    } as ReactHtml.Input
    return <input {...attr}>{properties.children}</input>
}

export default EoInput
