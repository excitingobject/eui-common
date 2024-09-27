import EoBtn from "../components/EoBtn"

const MainView: React.FC = () => {
    return <div className="v100" style={{position: "absolute"}}>
        <EoBtn>Button</EoBtn>
        <EoBtn outline>Outline</EoBtn>
        <EoBtn active>Active</EoBtn>
        <EoBtn disabled>Disabled</EoBtn>

        <EoBtn className="r5">Button</EoBtn>
        <EoBtn className="r10" outline>Outline</EoBtn>
        <EoBtn className="r15" active>Active</EoBtn>
        <EoBtn className="r20" disabled>Disabled</EoBtn>
        
        <EoBtn className="vw100">width:100%;</EoBtn>
        <EoBtn className="vw20 vh8">width:20%; height:8%;</EoBtn>
        <EoBtn className="vw30 vh5" outline>Outline(width:30%; height:5%;)</EoBtn>
        <EoBtn className="r300 vw100 vh30" active>Active(width:100%; height:30%;)</EoBtn>
    </div>
}

export default MainView