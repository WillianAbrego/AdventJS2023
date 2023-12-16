/*Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:
*/
drawGift(4, "+");

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, "*");
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, "^");
/*
#
*/
/*
Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".
*/

export function drawGift(size, symbol) {
  const topLines = [];
  const bottomLines = [];
  const symbolPattern = symbol.repeat(Math.max(0, size - 2));
  for (let i = 0; i < size - 1; ++i) {
    let line = "";
    if (i === 0) {
      line = "#".repeat(size);
    } else {
      const symPtn = symbol.repeat(i - 1);
      line = `#${symbolPattern}#${symPtn}#`;
    }
    const spaces = size - i - 1;
    topLines.push(`${" ".repeat(spaces)}${line}`);
    bottomLines.unshift(line);
  }
  const barrer = "#".repeat(size);
  const middleLine = size > 1 ? `\n${barrer}${symbolPattern}#\n` : "#";
  const result = topLines.join("\n") + middleLine + bottomLines.join("\n");
  return result + "\n";
}
