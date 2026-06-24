const operaciones = require("../models/persona_model");
const usuarioModel = require("../models/usuario_model");

async function insertar(req, res) {

    const {
        nombre,
        apellido,
        direccion,
        telefono,
        nomusu,
        claveusu1,
        claveusu2
    } = req.body;

    // Validar campos de persona
    if (!nombre || !apellido || !direccion || !telefono) {

        return res.status(400).json({
            ok: false,
            mensaje: "Todos los campos son obligatorios"
        });

    }

    // Validar campos de usuario
    if (!nomusu || !claveusu1 || !claveusu2) {

        return res.status(400).json({
            ok: false,
            mensaje: "Debe completar los datos del usuario"
        });

    }

    // Validar contraseñas
    if (claveusu1 !== claveusu2) {

        return res.send(`
            <script>
                alert('Las contraseñas no coinciden');
                window.history.back();
            </script>
        `);

    }

    try {

        // Crear persona
        const result = await operaciones.crear(
            nombre,
            apellido,
            direccion,
            telefono
        );

        // Obtener ID generado
        const Id_per = result.insertId;

        console.log('ID PERSONA:', Id_per);

        // Crear usuario asociado a esa persona
        await usuarioModel.crear(
            nomusu,
            claveusu1,
            Id_per
        );

        return res.send(`
            <script>
                alert('Persona y usuario registrados correctamente');
                window.location.href='/index';
            </script>
        `);

    } catch (error) {

        console.log(error);

        return res.status(500).send(`
            <script>
                alert('Error al registrar');
                window.history.back();
            </script>
        `);

    }

}

async function lista_datos(req, res) {
  try {
    const personas = await operaciones.listar();
    
    res.render("index", {
      personas,
      page: "index",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("error al listar personas");
  };

  
}
async function eliminarId(req, res) {
    try {
      const id = req.params.id;

      await operaciones.eliminar(id);
      return res.send(`
            <script>
                alert('Registro eliminado correctamente');
                window.location.href='/index';
            </script>
        `);

    } catch (error) {
      console.log(error);
      return res.send(`
            <script>
                alert('Registro eliminado correctamente');
                window.location.href='/index';
            </script>
        `);

    }

  }

module.exports = {
  lista_datos,
  insertar,
  eliminarId
};
