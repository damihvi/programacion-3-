class libro {
    public nombre: string;
    private paginas: number;
    protected dni: string = "123456789";
    constructor(nombre: string, paginas: number) {
        this.nombre = nombre;
        this.paginas = paginas;
    }
    cantidadPaginas(): void {
        console.log(`cantidad de paginas ${this.paginas}`)
    }
}

const myLibro = new libro("la dama de rosa", 350);
console.log(myLibro.nombre);
console.log(myLibro.cantidadPaginas());
