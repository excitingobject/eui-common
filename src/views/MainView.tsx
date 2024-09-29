import EoBtn from "../components/common/EoBtn"
import EoInput from "../components/common/EoInput"
import EoSelect from "../components/common/EoSelect"

const MainView: React.FC = () => {
    const codes: Eo.Data.CodeType[] = [
        {
            label: 'Exciting Object',
            order: 3
        },
        {
            label: 'Test',
            order: 1,
        },
        {
            label: 'Disabled',
            disabled: true,
            order: 2
        },
        {
            label: 'Selected',
        },
    ]
    const onSelected = (data: any) => {
        console.log(data);
    }
    return <div className="fullscreen">
        <EoBtn>Button</EoBtn>
        <EoBtn outline>Outline</EoBtn>
        <EoBtn active>Active</EoBtn>
        <EoBtn disabled>Disabled</EoBtn>
        <br/>

        <EoInput type='text' placeholder="Test placeholder..."/>
        <EoInput type='text' disabled value="Disabled..."/>
        <br/>

        <EoSelect placeholder="Select One..." _on_selected={onSelected}>
            <option>Test1</option>
            <option>Test2</option>
            <option>Test3</option>
            <option>Test4</option>
        </EoSelect>
        <EoSelect options={codes} placeholder="Select One..." _on_selected={onSelected}/>
        <EoSelect options={codes} placeholder="Select Multiple..." multiple _on_multi_selected={onSelected}/>
        <EoSelect options={codes} placeholder="Placeholder, Disabled 테스트..."disabled className="vw100"/>
    </div>
}

export default MainView