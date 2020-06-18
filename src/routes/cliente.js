const { read } = require('../modules/cliente')

module.exports = router =>
{
  router.route('/clientes') /* -- Aqui se define una sola ruta global para todos los metodos del CRUD -- */
    /* --------------- Metodo VER TODO ------------------------------ */
    .get(async (req, res) => { 
      const {status, message} = await read()
        res.status(200).json({ status, message })
      })
    /* ----- Este sería el QUERY par VER TODO desde la consola ----- *//*
      Cliente.findAll().then(function(cliente) {
        console.log(cliente)
      })
    /* --------------- FIN - Metodo VER TODO ------------------------ */
}