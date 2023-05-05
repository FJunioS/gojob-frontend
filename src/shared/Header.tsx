import {createSignal, Show} from "solid-js";


export default () => {
    let [state, setState] = createSignal<boolean>(false);

    const Immg = () => {
        return <div
            class={"bg-[url('/src/assets/logo.svg')] bg-no-repeat w-48 h-10"}>
            <p class={"opacity-0"}>.</p>
        </div>
    }
    return (<>

        <header class={"columns-2 flex p-4 px-8 bg-[#252731]"}>
            <div class={"w-full left-0"}>
                {state() ? "Explore" : <Immg/>}
            </div>

            <button class={""} onclick={() => setState(!state())}>
                <p>Hamburgáo</p>
            </button>
        </header>

        <Show when={state()} keyed>
            <div class={"absolute w-full h-full bg-[#1C1D28] z-20 text-2xl"}>vish</div>
        </Show>
    </>)
}
