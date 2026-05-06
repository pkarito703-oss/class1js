class Contrato extends Empleado {
    constructor(tiempoEmpleado, cc, nombre, apellido, direccion, email, telefono, sueldoBase, tipoBonificacion, tipoEmpleado    ) {
        super(cc, nombre, apellido, direccion, email, telefono, sueldoBase, tipoBonificacion, tipoEmpleado);
        this.tiempoEmpleado = tiempoEmpleado;
    }
}