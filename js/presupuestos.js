function sumatoria(servicios) {
    let total = 0;
    for (let i = 0; i < servicios.length; i++) {
      total += servicios[i];
    }
    return total;
  }
  
  function presupuestos(salon, servicios) {
    const totServ = sumatoria(servicios);
    const totPresup = totServ + salon;
  
    localStorage.setItem("totPresup", JSON.stringify(totPresup));
  
    return totPresup;
  }
  