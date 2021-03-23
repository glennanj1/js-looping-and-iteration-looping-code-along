function writeCards(name, event) {                                         let cards = []
    for (let i = 0; i < name.length; i++) {
    cards.push( `Thank you, ${name[i]}, for the wonderful ${event} gift!` ); 
    }
    return cards 

}

// while ([condition]) {
//     [loop body]
// }


// const bets = [100, 200, 900, 20000]

// function addBets(bets) {
//     let i = 0;
//     while (i < bets.length) {
//       console.log(`Placed $${bets[i] and added it to betslip`); i ++; 

//     }
//    return bets;
// }

// addBets(bets);


function countDown(num) {
    for (let i = 0; num >= 0; num--)
        console.log(num);
}
