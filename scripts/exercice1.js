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
                                let position = mot.codePointAt() - 97;
                                return position + 9398;
}
    
const shiftCodePointList = mot =>{ (Array.from(mot)).map((elt,i) => shiftCodePoint(mot.charAt(i)));
                                    /*
                                   let lst = [];
                                   for(let i = 0 ; i < mot.length ; i ++){
                                        lst.push(shiftCodePoint(mot.charAt(i)));
                                   }
                                   return lst;
                                   */
                                }
const lname = persons.map(elt => elt.name); 
console.log(lname.map(elt => (shiftCodePointList(elt).map(letter => String.fromCodePoint(letter))).join()));

/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);



/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);


/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);


/*********************************************/


/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);


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

/*********************************************/

/********** EXERCICE 9 ***********************/
console.log(` *** EXERCICE 9 *** `);



/*********************************************/

/********** EXERCICE 10 ***********************/
console.log(` *** EXERCICE 10 *** `);



/*********************************************/
