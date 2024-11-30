import { useContext } from "react";
import { Password,Founder,Version } from "../App";
import ChildB from "./ChildB";



const ChildA =()=>{

    const MyPass = useContext(Password);
    const founder = useContext(Founder);
    const version = useContext(Version);


    return (
        <div>
            <h1>Child A Hook Method</h1>
            <h2>Password - {MyPass}</h2>
            <h2>Founder - {founder}</h2>
            <h2>Version - {version}</h2>
            <ChildB/>
        </div>
    )
}
export default ChildA;