import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import GraficoRodeo from './GraficoRodeo';
import MensajeError from './MensajeError';

function Reposicion(props) {

    let gastoReposicionMes = (parseFloat(props.gastoReposicion) / 12).toFixed(0);
    let gastoReposicionP = (parseFloat(props.gastoReposicionP)).toFixed(1);
    let porcentajeReposicion = (parseFloat(props.porcentajeReposicion)).toFixed(1);
    let variacionVacas = (Math.abs(parseFloat(props.cantidadVqReposicion) - parseFloat(props.bajaVacas))).toFixed(0);
    let bajaVacasP = (parseFloat(props.bajaVacasP)).toFixed(1);
    let mensaje;

    if (parseFloat(props.cantidadVqReposicion) > parseFloat(props.bajaVacas)) {
        mensaje = `Crece en ${variacionVacas} vacas`;
    } else if (parseFloat(props.cantidadVqReposicion) < parseFloat(props.bajaVacas)) {
        mensaje = `Disminuye en ${variacionVacas} vacas`;
    } else { mensaje = "El rodeo se mantiene sin variaciones" };

    return (
        <div>
            {props.validacion4 === false && (<div>
                <MensajeError />
            </div>)}
            {props.validacion4 && (<div className='resultados'>

                <h4>Resumen reposición y variación de rodeo</h4>
                <hr></hr>
                <div className='seccionCompuesta'>
                    <div className='titulo3' style={{backgroundColor: 'lightgreen'}}>
                        <h6>Vaquillonas de reposición: {props.cantidadVqReposicion}</h6>
                        <p>{props.cantidadVaquillonas} disponibles - {props.vaquillonasCab} vendidas</p>
                        <h5>{porcentajeReposicion}% de reposición</h5>
                    </div>
                    <div className='titulo3' style={{backgroundColor: 'lightpink'}}>
                        <h6>Baja anual de vacas: {props.bajaVacas}</h6>
                        <p>{props.vacasCab} vendidas + {props.vacasMuertas} muertas</p>
                        <h5>{props.bajaVacasP}% de bajas</h5>
                    </div>
                </div>
                <GraficoRodeo porcentajeReposicion={porcentajeReposicion} bajaVacasP={bajaVacasP} />
                <div className='titulo4'>
                    <h5>Variación de rodeo: {(porcentajeReposicion - bajaVacasP).toFixed(1)}% anual</h5>
                    <p>{mensaje}</p>
                </div>

                <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">{props.codigoMoneda}/año</th>
                                <th scope="col">{props.codigoMoneda}/mes</th>
                                <th scope="col">% sobre IB leche</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GASTO DE REPOSICIÓN</td>
                                <td>{new Intl.NumberFormat().format(props.gastoReposicion)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastoReposicionMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gastoReposicionP)}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default Reposicion;