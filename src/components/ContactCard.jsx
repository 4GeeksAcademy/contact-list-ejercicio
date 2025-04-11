function ContactCard() {
    return (
        <div className="card mb-3 p-3" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
                <div className="col-md-3">
                    <img src="https://avatar.iran.liara.run/public" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body text-start">
                        <h5 className="card-title">Rafael Vargas</h5>
                        <p className="card-text"><i class="fa-solid fa-location-dot me-2"></i> Direccion</p>
                        <p className="card-text"><i class="fa-solid fa-phone me-2"></i> Telefono</p>
                        <p className="card-text"><i class="fa-solid fa-envelope me-2"></i> Correo</p>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center gap-1">
                    <button className="btn btn-primary">Editar</button>
                    <button className="btn btn-danger">Borrar</button>
                </div>
            </div>
        </div>
    )
}



export default ContactCard