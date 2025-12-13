

let variable = prompt("Введите код цвета");
        switch (variable){
         
    case '#FF0000':
    case '#ff0000':
    case  '#f00':
         console.log ("Ваш цвет красный")

         break
    case  '#FFA500':
    case  '#ffa500':
         console.log ("Ваш цвет оранжевый")
         break

    case  '#FFFF00':
    case  '#ffff00':
    case  '#ff0':
         console.log ("Ваш цвет желтый")
         break

    case  '#008000':
         console.log ("Ваш цвет зеленый")
         break
        
    case  '#00FFFF':
    case  '#00ffff':
    case  '#0ff':
         console.log ("Ваш цвет аква")

         break
    case  '#0000FF':
    case  '#0000ff':
    case  '#00f':
         console.log ("Ваш цвет синий")
         break

    case  '#800080':
    
         console.log ("Ваш цвет фиолетовый")
         break
    default:
        console.log ("Неизвестное значение")
        }