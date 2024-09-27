import EoBtn from "../components/common/EoBtn"
import EoInput from "../components/common/EoInput"
import EoSelect from "../components/common/EoSelect"

const MainView: React.FC = () => {
    const codes = [
        {
            label: 'Exciting Object',
            order: 3
        },
        {
            label: 'Test',
            order: 1
        },
        {
            label: 'Disabled',
            disabled: true,
            order: 2
        },
        {
            label: 'Selected',
            // selected: true
        },
    ]
    return <div className="v100" style={{position: "absolute"}}>
        <EoBtn>Button</EoBtn>
        <EoBtn outline>Outline</EoBtn>
        <EoBtn active>Active</EoBtn>
        <EoBtn disabled>Disabled</EoBtn>
        <br/>

        <EoInput type='text' placeholder="Test placeholder..."/>
        <EoInput type='text' disabled value="Disabled..."/>
        <br/>

        <EoSelect options={codes} placeholder="Select One..."/>
        <EoSelect options={codes} placeholder="Select Multiple..." multiple/>
        <EoSelect options={codes} disabled className="vw100"/>
    </div>
}

export default MainView