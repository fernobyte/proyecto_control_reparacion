const conn= require('../config/conexion_bd');


const acciones_usu={

    crear: async(nombre, clave, personas)=>{

        const sql= 'INSERT INTO usuario(nombre_usuario, clave, personas) VALUES(?,?,?)';
        const[result]=  await conn.execute(sql, [nombre, clave, personas]);

        return result;

    }




}

module.exports= acciones_usu;