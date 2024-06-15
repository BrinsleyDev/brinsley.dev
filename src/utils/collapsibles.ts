export function processCollapsibles(
    buttonClassName: string,
    showContent = false,
) {
    const buttons = document.querySelectorAll(buttonClassName)

    buttons.forEach((button) => {
        // @ts-expect-error
        const id = button.dataset.id

        const content = document.getElementById(`${id}-content`)

        const iconDown = document.getElementById(`${id}-icon-down`)
        const iconUp = document.getElementById(`${id}-icon-up`)

        if (showContent) {
            iconDown?.classList.add("hidden")
        } else {
            content?.classList.add("hidden")
            iconUp?.classList.add("hidden")
        }

        button.addEventListener("click", () => {
            content?.classList.toggle("hidden")
            iconDown?.classList.toggle("hidden")
            iconUp?.classList.toggle("hidden")
        })
    })
}
