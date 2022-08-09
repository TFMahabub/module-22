//Discount Ticket Price result-
function discountTicketPrice(quantity){
    const first100TicketPrice = 100;
    const second100TicketPrice = 90;
    const restTicketPrice = 80;

    if (quantity <= 100){
        ticketPrice = quantity * first100TicketPrice;
        return ticketPrice;
    }
    else if (quantity <= 200){
        first100Price = 100 * first100TicketPrice;
        restTicket = quantity - 100;
        restPrice = restTicket * second100TicketPrice;
        ticketPrice = first100Price + restPrice;
        return ticketPrice;
    }
    else{
        first100Price = 100 * first100TicketPrice;
        second100Price = 100 * second100TicketPrice;
        restTicket = quantity - 200;
        restPrice = restTicket * restTicketPrice;
        ticketPrice = first100Price + second100Price + restPrice;
        return ticketPrice;
    }
}

result = discountTicketPrice(160);
console.log(result);



