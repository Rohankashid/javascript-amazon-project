export const deliveryOptions =[{
    id : '1' , 
    deliveryDays: '7 ' ,
    priceCents: 0
},
{
    id: '2',
    deliveryDays:'3',
    priceCents: 499
},
{
    id: '3',
    deliveryDays:'4',
    priceCents: 999
}];


export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;
    deliveryOptions.forEach((option) => {
      if (Option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });


    return deliveryOption || deliveryOptions[0] ;
}