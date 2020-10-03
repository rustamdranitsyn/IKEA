import { getData } from './getData.js';

    const wishlist = ['add005', 'add006', 'add007', 'add008', 'add009',];

    const cartList = [
        {
            id: 'idd015',
            count: 3 
        },
        {
            id: 'idd045',
            count: 2  
        },
        {
            id: 'idd095',
            count: 1
        },
    ]; 
export const loadData = () => {
    if (location.search) {
        const search = decodeURI(location.search);
        console.log(search);
        const prop = search.split('=')[0].substring(1);
        console.log('prop: ', prop);
        const value = search.split('=')[1];
        console.log('value', value);

        if (prop === 's') {
            console.log(value);
        } else if ([prop === 'wishlist']) {
            getData.wishList(wishlist, (data) => console.log(`wishlist: ${data}`)); 
        } else {
            console.log(prop, value);
        }
    }

    if (location.hash) {
        console.log(location.hash.substring(1));
    }

    if (location.pathname.includes('cart')) {
        console.log(cartList);
    }
}