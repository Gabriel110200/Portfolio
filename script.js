let h1 = document.querySelector(".myName");
let array = ["Olá, meu nome é Gabriel"];

function print(element) {

    return new Promise((resolve) => {
        setTimeout(() => {
            h1.append(element);
            resolve();
        }, 100)

    })


}



async function run() {



    let element = array[0].split("");

    for (item of element) {
        await print(item);
        console.log(item);

    }




}

run();
