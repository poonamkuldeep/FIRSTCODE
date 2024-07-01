const int = require("readline-sync");

function lemon(total) {
   for (let i = 0; i >= 0; i++) {
   let glass = int.questionInt("check errning enter (0) OR enter total glass:\n> ");

    total += glass*15;
    if (glass == 0) {
        let pass = int.question("enter password:\n> ");
        if (pass == "poonam") {
            console.log(total);
        }
    }

    // switch (true) {
    //     case glass == 0:
    //     let pass = int.question("enter password:\n> ");
    //     if (pass == "poonam") {
    //         console.log(total);Q
    //     }
    // }
   }
}

lemon(0)
