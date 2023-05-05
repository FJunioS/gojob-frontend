let boxes, input, indicator

export default () => {
    return (
        <div class={"w-full flex justify-center"}>
            <form class={"border-[1px] border-gray-600 bg-[#1C1D28] rounded-md" +
                " relative"} action="#" method="post">

                <div class={boxes = "flex justify-between m-2 gap-8"}>
                    <p class={indicator = "text-2xl font-bold italic text-blue-300"}>
                        what?
                    </p>
                    <input
                        class={input = "w-48 mr-8 bg-[#1C1D28] rounded-md p-1 text-right"}
                        type="text"
                        name="Position"
                        id="Position"
                        placeholder="Java Developer"
                    />
                </div>
                <hr class={"border-gray-800"}/>

                <div class={boxes}>
                    <p class={indicator}>
                        where?
                    </p>
                    <input
                        class={input}
                        type="text"
                        name="Place"
                        id="Place"
                        placeholder="San Francisco, CA"
                    />
                </div>

                <button
                    class="border-2 absolute top-6 -right-8 rounded-md px-2 py-1 bg-blue-500"
                    type="submit"
                >
                    Find
                </button>
            </form>
        </div>
    )
}
