import { useEffect, useState } from "react";

function Consulta_cat() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/dwi-9a/index.php/Api/Categoria');
                if (!response.ok) {
                    throw new Error('La solicitud no pudo ser completada.');
                }
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                </div>
                <div className="content">
                    <div className="container">

                        <div className='row'>
                            <div className='col-xs-12  col-lg-12'>
                                <div className='card card-primary'>
                                    <div className='card-header'>
                                        <h4 className='card-title'>
                                            Consulta de Categorias
                                        </h4>
                                    </div>
                                    <div >
                                        <table className='table text-center'>
                                            <thead>
                                                <tr>
                                                    <th>Idcategoria</th>
                                                    <th>Tipo</th>
                                                    <th>Nombre</th>
                                                    <th>Status</th>
                                                    <th>Fecha de alta</th>
                                                    <th>Personal</th>
                                                    <th className="col-lg-5">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item) => (
                                                    <tr key={item.IdCategoria}>
                                                        <td>{item.Tipo}</td>
                                                        <td>{item.Nombre}</td>
                                                        <td>{item.Status}</td>
                                                        <td>{item.Fecha_alta}</td>
                                                        <td>{item.Personal}</td>
                                                        <td >
                                                            <button className='btn btn-sm bg-blue col-lg-4 offset-md-1'>Editar</button>
                                                            <button className='btn btn-sm bg-danger col-lg-4 offset-md-1 ' onClick={() => handleDelete(item.IdCategoria)}>Borrar</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

       </>
    );
};

export default Consulta_cat;