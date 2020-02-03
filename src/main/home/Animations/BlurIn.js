import { keyframes } from "styled-components";

    const BlurIn = keyframes`
            0%{
                -webkit-backdrop-filter: blur(5px);
                backdrop-filter: blur(5px);
        }
        100%{
            -webkit-backdrop-filter: blur(0px);
            backdrop-filter: blur(0px);
        }
        `

export default BlurIn;