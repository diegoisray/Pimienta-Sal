const productos = [
    {     id: 1,
        nombre:"Carpaccio fresco",
        descripcion:"Entrada Carpaccio de salmón con cítricos",
        precio: 65.5,
        imagen: "Carpaccio-de-salmon.jpg"
    },
    {    id: 2,
        nombre:"Risotto de berenjena",
        descripcion:" Risotto de berenjena y queso de cabra",
        precio: 47.0,
        imagen: "Risotto-berenjena-queso-cabra.jpg"
    },
    {    id: 3,
        nombre:"Mousse de arroz",
        descripcion:"Mousse de arroz con leche y aroma de azahar",
        precio: 27.5,
        imagen: "Mousse-de-arroz-con-leche.jpg"
    },
    {   id: 4,
        nombre:"Espárragos blancos",
        descripcion:" Espárragos blancos con vinagreta de verduras y jamón ibérico ",
        precio: 37.5,
        imagen: "esparragos.png"
    },
    {   id: 5,
        nombre:"Fideos con tuco",
        descripcion:"",
        precio: 15.5,
        imagen: "fideos-con-tuco.jpg"
    },
    {   id: 6,
        nombre:"Pastel de papa",
        descripcion:"",
        precio: 20.7,
        imagen: "pastel-de-papas.webp"
    },
    {
        id: 7,
        nombre:"Milanesa con Puré",
        descripcion:"",
        precio: 12.7,
        imagen: ""
    }
];
   

const indexController = {
    index: (req,res)  => {
        res.render("home", {title:"Pimienta & Sal", productos})
    },
    detail: (req,res)  => {
        const {id} = req.params;
        const producto = productos.find( producto => producto.id == id )
        res.render("detail", {title:producto.nombre, producto})
    } 

}

module.exports = indexController;
