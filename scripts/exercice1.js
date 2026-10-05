'use strict';

// des listes pour des tests
const numbers = [2, 3, 5, 4, 10, 6];
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'sam', age : 26 }, {name : 'frodo', age : 33 }];

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);

// exemple de manière de répondre aux questions d'un exercice

// Q1
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;

//Q2
// tests d'exécution de la fonction example
console.log(`example(10) : ${example(10)}`);
console.log(`example(21) : ${example(21)}`);

// Q3
/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );

// Q4
// tests d'exécution de la fonction example2
console.log(`example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/



/********** EXERCICE 2 ***********************/
console.log(` *** EXERCICE 2 *** `);


console.log(persons.map(elt => elt.name))

console.log(persons.map(elt => elt.name[0].toUpperCase()))

console.log(persons.map((elt,i) => elt.name[i]))

const capitalize = elm1 => elm1.charAt(0).toUpperCase() + elm1.slice(1)
    
    /*const capitalize = function(elm) {for(let i = 0 ; i < elm.length ; i ++){
                                if (i == 0){
                                    return elm[0].toUpperCase();
                                }else {
                                    return elm;
                                }
                            }
                        }
    */

console.log(persons.map(elt => capitalize(elt.name)))

const myMap = (list,fonction) => {let lst2 = [];
                                for (let elm2 of list){
                                    lst2.push(fonction(elm2.name));
                                }
                                return lst2;
                            }

console.log(myMap(persons, capitalize))


/*********************************************/


/********** EXERCICE 3 ***********************/
console.log(` *** EXERCICE 3 *** `);
/*Pendant le travail du TP, pour visualiser le résultat de votre travail, vous devez charger le fichier html/exercice1.html dans Firefox et consulter la trace d'exécution dans la console qui s'active par Ctrl Shift K.*/

const shiftCodePoint = mot => {
                                let position = mot.codePointAt(0) - 97;
                                return position + 9398;
}
    
const shiftCodePointList = mot => Array.from(mot).map(elt => shiftCodePoint(elt));
                                    /*
                                   let lst = [];
                                   for(let i = 0 ; i < mot.length ; i ++){
                                        lst.push(shiftCodePoint(mot.charAt(i)));
                                   }
                                   return lst;
                                   */
const lname = persons.map(elt => elt.name); 
console.log(lname.map(elt => (shiftCodePointList(elt).map(letter => String.fromCodePoint(letter))).join()));

/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);

console.log(numbers.map(elt => elt * 10));

const multiples = (n,lst) => lst.map(elt => elt * n);

const multiples5 = lst => multiples(5,lst);

const multiplesFactory = (factor) => {return (lst) => multiples(factor, lst)}

/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);

numbers.forEach(elt => console.log(elt));

persons.forEach(elt => {console.log(`${elt.name} a ${elt.age} ans`);});

/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);

const t_inf5 = numbers.filter(elt => elt < 5);
console.log(t_inf5);

const createAcronym = phrase => { const tab_phrase = phrase.split(" ");
                                  const tab_phrase3 = tab_phrase.filter(elt => elt.length > 3);
                                  const res = tab_phrase3.map(elt => elt.charAt(0).toUpperCase());
                                  return res.join("");
}


/*********************************************/


/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);

const nbLetters = phrase => { const tab_phrase = phrase.split(" ");
                              const res =tab_phrase.reduce((res, elt) => res + elt.length, 0);
                              return res;
}  

const max = (nb1, nb2) => {if (nb1 < nb2){
                                return nb2;
                            }else{
                                return nb1;
                            }
}

const maxNumber = lst => lst.reduce((res, elt) => max(res,elt),0);

const maxNumber2 = lst => Math.max(...lst);

const sum = (...val) => val.reduce((res, elt) => res + elt, 0);

/*********************************************/


/********** EXERCICE 8 ***********************/
console.log(` *** EXERCICE 8 *** `);

const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin']
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];

const participants = (invite, reponse) => { const f = reponse.filter(elt => elt.present == 'oui').map(elt => elt.nom);
                                            const temp = reponse.map(elt => elt.nom);
                                            return invite.filter(elt => f.includes(elt) || !temp.includes(elt));

}

/*********************************************/

/********** EXERCICE 9 ***********************/
console.log(` *** EXERCICE 9 *** `);



/*********************************************/

/********** EXERCICE 10 ***********************/
console.log(` *** EXERCICE 10 *** `);



/*********************************************/
