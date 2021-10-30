let mes:number=document.getElementById("numerodemes");
let btn=document.getElementById("btn");
btn?.addEventListener("click", ()=>{
  let mes2=Number(mes.value);

  
 switch (mes2) {
   case (1):
     console.log("Tiene 31 días");
     break;
     case (2):
     console.log("Tiene 28 días");
      break;
      case (3):
        console.log("Tiene 31 días");
     
        break;
        case (4):
          console.log("Tiene 30 días");
     
          break;
          case (5):
             console.log("Tiene 31 días");
            break;
            case (6):
              console.log("Tiene 30 días");
              break;
              case (7):
                console.log("Tiene 31 días");
                break;
                case (8):
                  console.log("Tiene 31 días");
     
                  break;
                  case (9):
                    console.log("Tiene 30 días");
     
                    break;
                    case (10):
                      console.log("Tiene 31 días");
     
                      break;
                      case (11):
                        console.log("Tiene 30 días")
     
                        break;
                        case (12):
                          console.log("Tiene 31 días")
     
                          break;
                          
                          default:
     
                          break;
 }
}
