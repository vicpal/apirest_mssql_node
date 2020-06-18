const { Cliente } = require('./model')

async function read(){
  try
  {
    const res = await Cliente.findAll()
    return { status: true, message: res }
  }
  catch(e)
  {
    if(e.errors) return { status: false, message: e.errors.map(item => item.message.replace('cliente.', '')) }
    return { status: false, message: e.message }
  }
}

/* ------------- DESDE AQUI EXPORTAMOS LAS FUNCIONES QUE SE EJECURTAN EN LA BD ------------- */
module.exports = {
  read
}