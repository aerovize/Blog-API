const createId = () => {
    // Create Date Object
    const d = new Date();
    // Assigne date properies to variables
    const one = d.getMonth();
    const two = d.getDate();
    const three = d.getFullYear();
    const four = d.getHours();
    const five = d.getMinutes();
    const six = d.getSeconds();
    // Combine together to create a unique ID
    const combo = `${one}${two}${three}${four}${five}${six}`;

    return combo;
};

module.exports = createId;