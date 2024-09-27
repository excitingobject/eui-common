import { clsx } from "clsx";
import { FC } from "react";

const EoSelect: FC<Eo.SelectProps> = (props) => {
    const properties: Eo.SelectProps = {
        ...props,
        ...props.properties
    }

    const options = [...properties.options];
    const selectedOne = options.find(o => o.selected == true)
    const isOption = options.length > 0;
    if (isOption) {
        options.sort((a, b) => {
            const o1 = a.order || 0;
            const o2 = b.order || 0;
            return o1 == o2 ? 0 : o1 > o2 ? 1 : -1;
        })
    }

    const onSelected = (selected: Eo.Data.CodeType) => {
        if (properties._on_selected) {
            properties._on_selected(selected);
        }
    }
    
    const attr = {
        ...properties,
        className: clsx('eo-select outline r5', properties.className),

        options: undefined,
        placeholder: undefined,
        _on_selected: undefined
    } as ReactHtml.Select

    return <select {...attr}>
        {
            selectedOne == undefined && props.placeholder && !props.multiple &&
            <option label={props.placeholder} style={{display: 'none'}} />
        }
        {
            isOption ? options.map((o, i) => <EoOption key={'o_todo-key_' + i} {...o} _on_selected={onSelected} />) : properties.children
        }
    </select>
}

export default EoSelect

export const EoOption: FC<Eo.OptionProps> = (props) => {
    const attr = {
        ...props,

        order: undefined,
        data: undefined,
        _on_selected: undefined
    } as ReactHtml.Option

    const onSelected = () => {
        if (props._on_selected) {
            props._on_selected(props.data);
        }
    }
    return <option {...attr} onClick={onSelected}>{props.children}</option>
}