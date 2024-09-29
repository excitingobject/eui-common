import rand from "@/src/scripts/utils/rand";
import { clsx } from "clsx";
import { FC } from "react";

const EoSelect: FC<Eo.SelectProps> = (props) => {
    const properties: Eo.SelectProps = {
        ...props,
        ...props.properties
    }

    const options = properties.options? [...properties.options]: [];
    const isOption = options.length > 0;
    if (isOption) {
        options.sort((a, b) => {
            const o1 = a.order || Number.MAX_SAFE_INTEGER;
            const o2 = b.order || Number.MAX_SAFE_INTEGER;
            return o1 == o2 ? 0 : o1 > o2 ? 1 : -1;
        })
    }    
    const selectedIdx = options.findIndex(o => o.selected == true)
    
    const attr = {
        ...properties,
        className: clsx('eo-select outline r5', properties.className),
        defaultValue: (selectedIdx > -1 && !properties.multiple) ? selectedIdx : undefined,

        onChange: (e: any) => {            
            if(properties.onChange) {
                properties.onChange(e);
            }
            const selectedCodes: Eo.Data.CodeType[] = []
            if (properties._on_selected) {
                console.log(e)
                // properties._on_selected(op : undefined);
            }
            if (properties._on_multi_selected) {
                for(let i=0; i<e.target.length; i++) {
                    if(e.target[i] && e.target[i].selected == true) {
                        console.log(i, e.target[i].selected);
                        selectedCodes.push(options[i])
                    }
                }
                properties._on_multi_selected(selectedCodes);
            }
        },

        options: undefined,
        placeholder: undefined,
        _on_selected: undefined,
        _on_multi_selected: undefined
    } as ReactHtml.Select

    const optKey = rand.code('opt','-')
    return <select {...attr}>
        {
            selectedIdx < 0 && props.placeholder && !props.multiple &&
            <option label={props.placeholder} style={{display: 'none'}} />
        }
        {
            isOption ? options.map((o, i) => {
                const optionAttr = {
                    // default: code
                    disabled: o.disabled,        
                    label: o.label
                } as ReactHtml.Option                
                return <option key={optKey + i} {...optionAttr} />
            }) : properties.children
        }
    </select>
}

export default EoSelect