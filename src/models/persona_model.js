const conn = require('../config/conexion_bd');




const operaciones={

    crear: async(nom_persona, apellidos, direccion, telefono)=>{
        const sql= 'INSERT INTO personas(nom_persona, apellidos, direccion, telefono) VALUES(?,?,?,?)';

    const [result]= await conn.execute(sql, [nom_persona, apellidos, direccion, telefono]);

    return result;

    },

    listar: async()=>{
        const sql ='SELECT * FROM personas';
        const[lista]= await conn.execute(sql);

        return lista;
    },
    eliminar: async(id)=>{
        const sql =' DELETE  FROM personas WHERE id_persona = ?';
        const [resul]= await conn.execute(sql, [id]);

        return resul;
    }
}

module.exports= operaciones;