function getTicket(ticket)
{
    console.log("Ticket Invoked",ticket);
}

function getOrder(orderId,cardID)
{
    console.log("Order Invoked",orderId,":",cardID);
}

// function HigherOrderFunc(fn){
//     let status = false;
//     return function(...data)//must accept parameter
//     {
//         if(!status)
//         {
//             status = true;
//             fn?.(...data);
//         }
//     }
// }

// arrow func
const HigherOrderFunc = (fn) => {
    let status = false;
    return (...data) => (!status?(status=true,fn?.(...data)):undefined)
}

let ticket = HigherOrderFunc(getTicket);
let order = HigherOrderFunc(getOrder);


ticket(100)
ticket()
ticket()


order(100,200)
order()
order()