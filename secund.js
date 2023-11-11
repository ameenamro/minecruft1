const borad_game = document.querySelector("#grid");
const row = 20;
const cul = 35;
const size = 30;
function create_borad_game_size(rowN, culN, sizeN) {


    borad_game.style.display = "grid";
    borad_game.style.gridTemplateColumns = `repeat(${culN}, ${sizeN}px)`;
    borad_game.style.gridTemplateRows = `repeat(${rowN}, ${sizeN}px)`;


}

function drawimage_cloud(loc1, loc2, count) {
    if (loc1 == 0 && loc2 > 5 && loc2 <= 8) {

        return 2;
    }
    if (loc1 == 1 && loc2 > 18 && loc2 <= 20 || loc1 == 2 && loc2 >= 0 && loc2 < 5) {

        return 2;

    }
    if (loc1 == 3 && loc2 >= 14 && loc2 < 20) {

        return 2;

    }

    if (loc1 == 1 && loc2 > 0 && loc2 <= 3) {

        return 2;
    }

    if (loc1 == 2 && loc2 > 13 && loc2 <= 19) {

        return 2;
    }

    if (loc1 == 4 && loc2 > 8 && loc2 <= 14) {

        return 2;
    }


    if (loc1 == 6 && loc2 > 4 && loc2 <= 7) {

        return 2;
    }

}


function draw_background(loc1, loc2, count) {
    let answer = 1;
    if (loc1 <= 24) {
        if (loc1 >= 24 && loc2 > 9) {
            answer = 0;
            return answer;

        }
        return answer;



    }


}



function draw_ground(loc1, loc2, count) {
    let answer = 3;

    if (loc1 == 24 && loc2 > 9) {

        return 3;

    }

    if (loc1 > 24) {
        return 3;

    }




}

function draw_tree(loc1, loc2, count) {
    let answer = 4;

    




}





function create_borad_game(rowN, culN, sizeN) {
    const gridData = [];
    let claud = 0;
    let background = 0;
    let ground = 0;
    let tree=0;
    create_borad_game_size(rowN, culN, sizeN);

    for (let i = 0; i < culN; i++) {
        for (let j = 0; j < rowN; j++) {
            const gridItem = document.createElement("div");
            const myImage = new Image(32, 32);
            gridItem.id = `${i}-${j}`;
            background = draw_background(i, j, sizeN);
            claud = drawimage_cloud(i, j, sizeN);
            ground = draw_ground(i, j, sizeN);
            tree=draw_tree(i, j, sizeN);
            if (background == 1) {
                myImage.src = "Minecraft extra resource/1.png";
                myImage.alt = " can_change it";

            }


            if (claud == 2) {
                myImage.src = "Minecraft extra resource/7.png";
                myImage.alt = " done";
            }

            if (ground == 3) {

                myImage.src = "Minecraft extra resource/40.png";
                myImage.alt = " can_change it";


            }

            if (tree=4) 
            {
             
        

            }


            gridItem.classList.add("grid_item");
            gridItem.appendChild(myImage);
            borad_game.appendChild(gridItem);
            gridData.push(gridItem);
        }
    }
    return gridData;

}



const gridData = create_borad_game(row, cul, size);















