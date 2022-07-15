import './ConfirmarCuenta.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ConfirmarCuenta = () => {

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams()
  const { token } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/usuarios/confirmar/${token}`
        const { data } = await axios(url); //el metodo GET va por default a la url
        setCuentaConfirmada(true);

        setAlerta({
          msg: data.msg,
          type: 'success'
        })

        // alert(data.msg);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
        });
      }
      setCargando(false);
    }
    confirmarCuenta();
  }, [])

  return (
    <div className='contenedorCuenta'>

      {!cargando ? <h1 className='alerta'>{alerta.msg}</h1> : <h1 className='alerta'>Cargandos...</h1>}
    </div>
  )
}

export default ConfirmarCuenta