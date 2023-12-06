/*En el taller de Santa, un elfo travieso ha estado jugando en la cadena 
de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y 
la secuencia modificada modified que puede incluir un paso extra
 o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva 
el primer paso extra que se ha añadido o eliminado en la 
cadena de fabricación. Si no hay ninguna diferencia 
entre las secuencias, devuelve una cadena vacía.
*/

// const original = "stepfor";
// const modified = "stepor";
// findNaughtyStep(original, modified); // 'f'

const original = "xxxx";
const modified = "xxoxx";
findNaughtyStep(original, modified); // ''

// A tener en cuenta:

// Siempre habrá un paso de diferencia o ninguno.
// La modificación puede ocurrir en cualquier lugar de la cadena.
// La secuencia original puede estar vacía

// const original = "abcd";
// const modified = "abcde";
// findNaughtyStep(original, modified); // 'e'

function findNaughtyStep(original, modified) {
  const [shorterText, longerText] = [original, modified].sort(
    (a, b) => a.length - b.length
  );
  return [...longerText].find((x, i) => shorterText[i] != x) ?? "";
}
