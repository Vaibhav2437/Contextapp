import { Password,Founder,Version } from "../App";
import ChildD from "./ChildD";
const ChildC =()=>{
    return (
        <div>
            <h1>Child C Context Method</h1>
            <Password.Consumer>
                {
                    (pass)=>{
                        return(
                            <h2>Password - {pass}</h2>
                        )
                    }
                }
            </Password.Consumer>
            <Founder.Consumer>
                {
                    (found)=>{
                        return(
                            <h2>Founder - {found}</h2>
                        )
                    }
                }
            </Founder.Consumer>
            <Version.Consumer>
            {
                    (version)=>{
                        return(
                            <h2>Version - {version}</h2>
                        )
                    }
                }
            </Version.Consumer>
            <ChildD/>
        </div>
    )
}
export default ChildC;