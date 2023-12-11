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

      
      <div className="col-3 d-flex justify-content-around"
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        zIndex: "1000",
        background: "rgba(255, 255, 255, 0.8)",
        padding: "10px",
        borderRadius: "5px"
      }}>
        <span className="btn btn-success">Legal</span>
        <span className="btn btn-warning">Parcial</span>
        <span className="btn btn-danger">Ilegal</span>
      </div>


    )
}

export default Leyenda