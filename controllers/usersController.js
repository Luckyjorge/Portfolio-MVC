const users = [
    {
        id: 1,
        name: "Eric",
        city: "Loma Hermosa",
        province: "Buenos Aires"
    },
    {
        id: 2,
        name: "Daniel",
        city: "San Miguel",
        province: "Buenos Aires"
    },
    {
        id: 3,
        name: "María",
        city: "Córdoba",
        province: "Córdoba"
    },
    {
        id: 4,
        name: "Lucas",
        city: "Rosario",
        province: "Santa Fe"
    },
    {
        id: 5,
        name: "Valentina",
        city: "Mendoza",
        province: "Mendoza"
    },
    {
        id: 6,
        name: "Martín",
        city: "La Plata",
        province: "Buenos Aires"
    },
    {
        id: 7,
        name: "Camila",
        city: "Salta",
        province: "Salta"
    },
    {
        id: 8,
        name: "Joaquín",
        city: "Tucumán",
        province: "Tucumán"
    },
    {
        id: 9,
        name: "Ana",
        city: "Mar del Plata",
        province: "Buenos Aires"
    },
    {
        id: 10,
        name: "Matías",
        city: "Neuquén",
        province: "Neuquén"
    }
]

module.exports = {
    index : (req,res) => {
       
        return res.render('users',{
            users
        })
    
    },
    profile : (req,res) => {
        const id = req.params.id;
        const user = users.find(user => user.id === +id);
        //console.log(user)

        return res.render('user', {
            user
        })
    }
}