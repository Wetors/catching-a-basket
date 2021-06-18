let canvas = document.querySelector('#canvas'); // Вызываем элемент Canvas
let ctx = canvas.getContext('2d'); // Создаем контекст рисования на холсте
let basket = new Image(); // Создаем HTMLImageElement
let bg = new Image(); // Создаем HTMLImageElement
let cercal = new Image(); // Создаем HTMLImageElement
let wand = new Image(); // Создаем HTMLImageElement
let c = [{x: 500, y: 400}]; // Координаты Корзинки
let u = 1;
// let xrtY = 150; // Координаты снежинки
// let xrtX = 230; // Координаты снежинки
let xrtX;
let xrtY;
let i = 0; // Считает сколько поймал снежинок
// let stop; //  Хранит requested
basket.src = 'Pngtree.png'; // Указываем ссылки на изображения
bg.src = 'background-game.png'; // Указываем ссылки на изображения
cercal.src = 'pngegg.png'; // Указываем ссылки на изображения
anime(); // Выполнить функцию при загрузке окна браузера
ran();
addEventListener('mousemove', mouseM); // События слушатель выполняет функцию при движении мыши 

// Функция позволяет управлять корзиной
function mouseM(e){
    c[0].x = e.pageX - 40;
    c[0].y = e.pageY - 80;  
    console.log(e.pageY);
};
   
// Отображиет игру 
function anime(){
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(cercal, xrtX, xrtY += u, 30, 30);
    ctx.drawImage(basket, c[0].x, c[0].y - 20, 180, 150);
    if(i === 10 && u === 1){
       u++;
    } else if(i === 20 && u === 2){ 
        u++;
    } 
 /* else if(i === 30 && u === 3){ 
        u++;
    } else if(i === 40 && u === 4){
        u++;
    } else if(i === 50 && u === 5){
        u++;
    }
 */ 
    model(); 
    text();
    stop = requestAnimationFrame(anime);
    win(stop);
    endGame(stop);    
};

// Проверки победы
function model(){
    let bX = (c[0].x - 20) + 180; 
    let bY = (c[0].y - 40) + 80;
    let xrtYY = xrtY - u;
    for(let k = 0; k < u; k++){
       xrtYY++
    if(xrtX >= c[0].x && xrtX <= bX && c[0].y === xrtYY){
        console.log('win 1');
        i++;
        ran();
    } 
    }
};

// Перезначение снижинки 
function ran(){
    let num = Math.floor(Math.random() * 6) + 1;
    if(num === 1){
        xrtY = 160;
        xrtX = Math.floor(Math.random() * (230 - 30) + 30)
    } else if(num === 2){ 
        xrtY = 355; 
        xrtX = Math.floor(Math.random() * (480 - 360) + 360);
    } else if(num === 3){  
       xrtY = 185;
       xrtX = Math.floor(Math.random() * (720 - 600) + 600);
   } else if(num === 4){
       xrtY = 320;
       xrtX = Math.floor(Math.random() * (940 - 830) + 830);
   } else if(num === 5){  
       xrtY = 160;
       xrtX = Math.floor(Math.random() * (1400 - 1150) + 1150);
   } else if(num === 6){
       xrtY = 320;
       xrtX = Math.floor(Math.random() * (1580 - 1480) + 1480);
    }    
};

// Отоброжения текста
function text(){ 
    ctx.fillStyle = 'white';
    ctx.font = 'bold 50px Lucida Console';
    ctx.fillText(i + 'x', 10, 50);
    ctx.strokeStyle = 'black';
    ctx.strokeText(i + 'x', 10, 50);
};

// Конец игры
function endGame(stop){
    if(xrtY >= 580){
       ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
       ctx.fillStyle = 'red';
       ctx.font = 'bold 300px  Impact';
       ctx.fillText('End Game', 250, 400);ctx.fillText('Coin: ' + i, 430, 680);
       cancelAnimationFrame(stop);  
    } 
}

function win(stop){
    if(i === 30){
       ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
       ctx.fillStyle = 'yellow';
       ctx.font = 'bold 400px Impact';
       ctx.fillText('Winner!!! ' + '<br>' + 'coin ' + i, 60, 400);
       ctx.font = 'bold 200px Impact';
       ctx.fillText('Coin: ' + i, 500, 590);
       cancelAnimationFrame(stop);
    }
}



