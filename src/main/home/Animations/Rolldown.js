import { keyframes } from "styled-components";

    const Rolldown = keyframes`
            0%{
            transform: translateY(-40%);
            opacity:0.5;
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
        `

export default Rolldown;