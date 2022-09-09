function mensaje (nombre) {
    console.log (`Hola ${nombre}`);
}
mensaje ("Querido Cliente");

let marcas = prompt (`Elija Tu Marca de Calzado Favorita:
    1:Nike
    2:Adidas
    3:Puma
    4:Reebok`)
    
    
    const championes = [
        {id: 1, producto:"Nike AirMax", precio: 5490, disponible: true},
        {id: 2, producto:"Adidas Coreracer", precio: 4290, disponible: true},
        {id: 3, producto:"Puma Xray Deportivo", precio: 4990, disponible: true},
        {id: 4, producto:"Reebok Triplehall", precio: 2880, disponible: true},
        {id: 5, producto:"New Balance Lifestyle", precio: 3990, disponible: true},
    ]
    
    
    
    function obtenerPrecios (marcas) {
    
            let total = 0;
            championes.forEach(producto => {
                if (producto.producto.includes(marcas)) 
                {
                    total += producto.precio
                }
            });
            return total;
    }
    alert(obtenerPrecios(marcas));


    let NikePrecio = 5490;
    let AdidasPrecio = 4290;
    let PumaPrecio = 4990;
    let ReebokPrecio = 2880;
    let NewBalancePrecio = 3990;

    function SumarIva(precioCosto)
    {
        return (precioCosto + (precioCosto * 0.21));
    }

    var NikeIva = SumarIva(NikePrecio);
    var AdidasIva = SumarIva(AdidasPrecio);
    var PumaIva = SumarIva(PumaPrecio);
    var ReebokIva = SumarIva(ReebokPrecio);
    var NewBalanceIva = SumarIva(NewBalancePrecio);

    alert("Precios totales con IVA:" + "\n Nike: " + NikeIva + "\n Adidas: " + AdidasIva + "\n Puma: " + PumaIva + "\n Reebok: " + ReebokIva + "\n New Balance: " + NewBalanceIva);

    const carrito = [
        {id: 1, producto:"Nike AirMax", precio: 5490, disponible: true},
        {id: 3, producto:"Puma Xray Deportivo", precio: 4990, disponible: true},
        {id: 4, producto:"Reebok Triplehall", precio: 2880, disponible: true},
    ]

    let total = 0

    carrito.forEach ((producto) => (total += producto . precio));

    console.log (total);

    let resultado = carrito.filter ((producto) => producto.precio > 4000);
    console.log (resultado);

console.log ( new Date() )