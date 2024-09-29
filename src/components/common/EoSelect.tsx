import rand from "@/src/scripts/utils/rand";
import { clsx } from "clsx";
import { FC } from "react";

const EoSelect: FC<Eo.SelectProps> = (props) => {
    const properties: Eo.SelectProps = {
        ...props,
        ...props.properties
    }

    const isCodes = Array.isArray(properties.codes) ;
    const codeList = isCodes? [...properties.codes]: [];
    if (isCodes) {
        codeList.sort((a, b) => {
            const o1 = a.order || Number.MAX_SAFE_INTEGER;
            const o2 = b.order || Number.MAX_SAFE_INTEGER;
            return o1 == o2 ? 0 : o1 > o2 ? 1 : -1;
        })
    }    
    
    const _selectedIdxArr:number[] = []
    codeList.map((c, i) => {
        if(c.selected) {
            _selectedIdxArr.push(i)
        }
    })

    const attr = {
        ...properties,
        className: clsx('eo-select outline r5', properties.className),
        value: isCodes ? _selectedIdxArr : properties.value,
        onChange: (e: any) => {            
            if(properties.onChange) {
                properties.onChange(e);
            }
            const selectedCodes: Eo.Data.CodeType[] = []
            if (properties._on_selected) {
                if(isCodes) {
                    properties._on_selected(codeList[e.target.value])
                } else {
                    properties._on_selected(e.target.value)
                }
            }
            if (properties._on_multi_selected) {
                for(let i=0; i<e.target.length; i++) {
                    if(e.target[i] && e.target[i].selected == true) {
                        console.log(i, e.target[i].selected);
                        selectedCodes.push(codeList[i])
                    }
                }
                properties._on_multi_selected(selectedCodes);
            }
        },

        codes: undefined,
        placeholder: undefined,
        _on_selected: undefined,
        _on_multi_selected: undefined
    } as ReactHtml.Select

    const optKey = rand.code('opt','-')
    return <select {...attr}>
        {
            _selectedIdxArr.length == 0 && props.placeholder && !properties.multiple &&
            <option label={props.placeholder} style={{display: 'none'}} />
        }
        {
            isCodes ? codeList.map((o, i) => {
                const optionAttr = {
                    disabled: o.disabled,        
                    label: o.label
                } as ReactHtml.Option                
                return <option key={optKey + i} {...optionAttr} value={i} />
            }) : properties.children
        }
    </select>
}

export default EoSelect