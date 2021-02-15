gsap.registerPlugin(Draggable);
const color = { hue: 180, saturation: 50, lightness: 50, alpha: 1 }; // initial HSLA color
const colorContainer = document.querySelector("#colorContainer");
const hslaData = document.querySelector("#hslaData");
const updateColor = () =>
    (hslaData.innerText = colorContainer.style.backgroundColor = `hsla(${color.hue}, ${color.saturation}%, ${color.lightness}%, ${color.alpha})`);

createDial("hue", 360);
createDial("saturation", 100);
createDial("lightness", 100);
createDial("alpha", 1);

function createDial(name, max) {
    const bounds = { minRotation: -135, maxRotation: 135 },
        map = gsap.utils.pipe(
            gsap.utils.mapRange(bounds.minRotation, bounds.maxRotation, 0, max), // map the rotation to the value range
            gsap.utils.snap(max > 1 ? 1 : 0.01) // round appropriately
        );
    gsap.set("." + name, {
        // we use a className in the markup, like ".hue", ".saturation", etc.
        transformOrigin: "center center",
        rotation: gsap.utils.mapRange(
            0,
            max,
            bounds.minRotation,
            bounds.maxRotation,
            color[name]
        )
    });
    Draggable.create("." + name, {
        type: "rotation",
        bounds: bounds,
        onDrag() {
            color[name] = map(this.rotation);
            updateColor();
        }
    });
}