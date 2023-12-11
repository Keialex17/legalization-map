import React from "react";

const Leyenda = () =>{

    return(
      //   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      //   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
      //     <div style={{ width: '20px', height: '20px', backgroundColor: legendColors.si, marginRight: '5px' }}></div>
      //     <span>Sí</span>
      //   </div>
      //   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
      //     <div style={{ width: '20px', height: '20px', backgroundColor: legendColors.resi, marginRight: '5px' }}></div>
      //     <span>Residencial</span>
      //   </div>
      //   <div style={{ display: 'flex', alignItems: 'center' }}>
      //     <div style={{ width: '20px', height: '20px', backgroundColor: legendColors.no, marginRight: '5px' }}></div>
      //     <span>No</span>
      //   </div>
      //   <h2>Date of data: 06/2022</h2>
      // </div>

      
      <div className="col-3 d-flex justify-content-around">
        <span className="btn btn-success">Legal</span>
        <span className="btn btn-warning">Residencial</span>
        <span className="btn btn-danger">Ilegal</span>
      </div>


    )
}

export default Leyenda