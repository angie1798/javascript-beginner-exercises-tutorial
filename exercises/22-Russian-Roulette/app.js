var bulletPosition = 4;
//variable p es unicamente útil para probar que funcione correctamente
var p=0;

const spinChamber = () => {
    var chamberPosition = Math.floor((Math.random() * 6) + 1);
    p= chamberPosition;
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {

    if (p===bulletPosition) return ("You're dead!");
    else return ("Keep playing!");
};

console.log(fireGun(spinChamber()) + " "+p);
