import moment from 'moment';
import { usuario } from './usuario';
import { Pokemon } from './pokemon';

interface Usuario {
	nombre: string;
	apellido: string;
	edad?: number;
}

export const saludar = (u: Usuario) => {
	console.log(`Hola ${u.nombre} ${u.apellido} ${u.edad}`);
};

export const sumar = (a: number, b: number) => {
	console.log(a + b);
};

saludar({ nombre: 'ignacio', apellido: 'perez', edad: 29 });

const date = moment('2023-06-26', 'YYYY-MM-DD');
const date2 = moment('2023-06-30', 'YYYY-MM-DD');
const diff = date2.diff(date, 'days');

console.log(
	`Entre ${date.format('L')} y ${date2.format('L')} hay ${diff} dias`
);

var p = new Pokemon('Pikachu');

p.getNombre();

p.getNombre();
