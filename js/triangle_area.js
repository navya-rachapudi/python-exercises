function calculateArea(side1, side2, side3) {
    s = (side1 + side2 + side3) / 2
    return Math.sqrt(s*(s-side1)*(s-side2)*(s-side3))
}

calculateArea(14, 15, 2)