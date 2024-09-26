import EoBtn from "../components/EoBtn"

const MainView: React.FC = () => {
    
    return <div className="vw100 vh100" style={{position: "absolute"}}>        
        <EoBtn>Button</EoBtn>
        <EoBtn active>Button</EoBtn>
        <EoBtn outline>Button</EoBtn>
        <EoBtn outline active>Button</EoBtn>
        <EoBtn round>Button</EoBtn>
        <EoBtn round active>Button</EoBtn>
        <EoBtn round outline>Button</EoBtn>
        <EoBtn round outline active>Button</EoBtn>
        <EoBtn className="vw100">Button</EoBtn>
        <EoBtn className="vw10 vh10" active>Button</EoBtn>
        <EoBtn className="vw20 vh8" round>Button</EoBtn>
        <EoBtn className="vw30 vh5" outline>Button</EoBtn>
    </div>
}

export default MainView