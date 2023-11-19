import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async (loaderInput:LoaderFunctionArgs) => {

    const pathname = loaderInput.params["*"];
    const result = await import(`../app/json/${pathname}.json`, {assert: {type: "json"}}); 

    
    return result;
}

export default function () {


    return <div>Whatever</div>
}