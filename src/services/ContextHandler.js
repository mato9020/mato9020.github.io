import { createContext } from "react"


const { Consumer, Provider } = createContext();

function consumerHandler(children) {

    const [Value, setValue] = useState(0);
    const [auth, setAuth] = useState(false);

    return (
        <div>
            <Consumer>
                {
                    context=>({children})
                }
            </Consumer>
        </div>

    );
}
func


export { Provider, Consumer }