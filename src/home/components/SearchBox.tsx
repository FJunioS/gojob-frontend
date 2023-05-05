export default () => {
    return (
        <div class={"w-full flex justify-center"}>
            <form class={"border-2 relative"} action="#" method="post">

                <div>
                    what?
                    <input type="text" name="Position" id="Position"/>
                </div>
                <div class={"m-2"}>
                    where?
                    <input type="text" name="Place" id="Place"/>
                </div>
                <button class={"border-2 absolute top-3 right-2 rounded-md px-2 py-1" +
                    " bg-blue-500"} type="submit">Send
                </button>
            </form>
        </div>
    )
}
