import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import MensajeError from './MensajeError';

function IngresosBrutos(props) {

    let ingresoLecheMes = (parseFloat(props.ingresoLeche)/12).toFixed(0);
    let ingresoCarneMes = (parseFloat(props.ingresoCarne)/12).toFixed(0);
    let ingresoVqMes = (parseFloat(props.ingresoVq)/12).toFixed(0);
    let ingresoBrutoMes = (parseFloat(props.ingresoBruto)/12).toFixed(0);

    return (
        <div>
            {props.validacion2 === false && (<div>
                <MensajeError />
            </div>)}
            {props.validacion2 && (<div className='resultados'>
                <h4>Resumen ingresos brutos por ventas</h4>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">{props.codigoMoneda}/año</th>
                                <th scope="col">{props.codigoMoneda}/mes</th>
                                <th scope="col">% sobre IB ventas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>INGRESOS POR VENTA DE LECHE</td>
                                <td>{new Intl.NumberFormat().format(props.ingresoLeche)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(ingresoLecheMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(props.ingresoLecheP)}%</td>
                            </tr>
                            <tr>
                                <td>INGRESOS POR VENTA DE CARNE</td>
                                <td>{new Intl.NumberFormat().format(props.ingresoCarne)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(ingresoCarneMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(props.ingresoCarneP)}%</td>
                            </tr>
                            <tr>
                                <td>INGRESOS POR VENTA DE VAQUILLONAS</td>
                                <td>{new Intl.NumberFormat().format(props.ingresoVq)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(ingresoVqMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(props.ingresoVqP)}%</td>
                            </tr>
                            <tr>
                                <td><b>INGRESOS BRUTOS POR VENTAS</b></td>
                                <td><b>{new Intl.NumberFormat().format(props.ingresoBruto)} {props.codigoMoneda}/año</b></td>
                                <td><b>{new Intl.NumberFormat().format(ingresoBrutoMes)} {props.codigoMoneda}/mes</b></td>
                                <td><b>{new Intl.NumberFormat().format(props.ingresoBrutoP)}%</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default IngresosBrutos;