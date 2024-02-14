const subtract = (a: number, b: number) => a - b;

function ArrowFunctions() {
    const threeMinusOne = subtract(3, 1);
    const typeOfSubtract = typeof subtract;
    console.log(threeMinusOne);

    return (
        <>
            <h3>New ES6 arrow functions</h3>
            threeMinusOne = {threeMinusOne}<br />
            subtract(3, 1) = {subtract(3, 1)}<br />
            typeOfSubtract = {typeOfSubtract}
        </>
    );
}

export default ArrowFunctions;