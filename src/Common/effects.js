export const ShadowEffect = `
    box-shadow: 0 12px 30px rgba(102, 102, 102, 0.1);

`
export const Ripple = `
    animation: at-ripple 0.5s linear infinite;
    overflow: hidden;
    @keyframes at-ripple {
        0% {
            box-shadow: 0 12px 30px rgba(102, 102, 102, 0.1), 0 0 0 0 rgba(102, 102, 102, 0.1), 0 0 0 15px rgba(102, 102, 102, 0.1), 0 0 0 20px rgba(102, 102, 102, 0.1);
        }
        100% {
            box-shadow: 0 12px 30px rgba(102, 102, 102, 0.1), 0 0 0 20px rgba(102, 102, 102, 0.1), 0 0 0 30px rgba(102, 102, 102, 0.1), 0 0 0 60px rgba(102, 102, 102, 0);
        }
    }
`
export const TransitionEffect = `
transition:.4s all ease-in-out;
`


