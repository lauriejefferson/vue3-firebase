const ninjas = ['luigi', 'yoshi', 'mario', 'peach'];

const formatNinjas = () => {
  let val = '';
  ninjas.forEach((ninjas) => (val += ninjas + ', '));
};

const greet = () => {
  console.log(ninjas[0] + ' says hello');
};

export { formatNinjas, greet };

export default ninjas;
