import { someValue } from "./values";

console.log(
    `some enviornment variable ${
        import.meta.env.VITE_SOME_ENVIORNMENT_VARIABLE
    }`
);
console.log(`some export ${someValue}`);
