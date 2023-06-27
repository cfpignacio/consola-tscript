export class Pokemon {
	constructor(private Nombre: string, private Poder?: string) {}

	getNombre() {
		console.log(this.Nombre);
	}

	setNombre(nombre: string) {
		if (nombre.length == 0) {
			return console.error('El nombre tiene que tener almenos una letra');
		}
		this.Nombre = nombre;
		console.log('Se cambio el nombre');
	}
}
