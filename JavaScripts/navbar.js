// Crear Navbar
let mynavbar = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<a class="navbar-brand" href="../index.html">
    <img src="../src/img/praxisLogo.png" width="50" height="50" alt="">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="../index.html">Inicio <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../Pages/Aspirantes.html">Aspirantes</a>
    </li>
  </ul>
</div>
</nav>`;

//Muestra Navbar
anclaNavbar.innerHTML = mynavbar;
