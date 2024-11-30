import { useContext } from "react";
import { Password,Founder,Version} from "../App";
import ChildC from "./ChildC";
const ChildB =()=>{

    const MyPass = useContext(Password);
    const founder = useContext(Founder);
    const version = useContext(Version);

    return (
        <div>
            <h1>Child B Use Hook Method</h1>
            <h2>Password - {MyPass}</h2>
            <h2>Founder - {founder}</h2>
            <h2>Version - {version}</h2>
            <ChildC/>
        </div>
    )
}
export default ChildB;