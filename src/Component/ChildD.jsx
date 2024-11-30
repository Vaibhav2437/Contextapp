import { Password,Founder,Version } from "../App";

const ChildD =()=>{
    return (
        <div>
            <h1>Child D Context Method</h1>
            <Password.Consumer>
                {
                    (Pass)=>{
                        return(
                            <h2>
                                Password -{Pass}
                            </h2>
                        )
                    }
                }
            </Password.Consumer>
            <Founder.Consumer>
                {
                    (found)=>{
                        return(
                            <h3>Founder - {found}</h3>
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

        </div>
    )
}
export default ChildD;