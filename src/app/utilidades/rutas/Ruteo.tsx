import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { Acerca } from "../../componentes/otros/Acerca";
import { ArtistasCrear } from "../../componentes/Artistas/ArtistasCrear";
import { ArtistasListar } from "../../componentes/Artistas/ArtistasListar";
import { ArtistasAdmin } from "../../componentes/Artistas/ArtistasAdmin";
import { ArtistasActualizar } from "../../componentes/Artistas/ArtistasActualizar";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/Arcrear" element={< ArtistasCrear/>}/>
      <Route path="/Arlist" element={< ArtistasListar/>}/>
      <Route path="/Armin" element={< ArtistasAdmin/>}/>

      <Route path="/canact/:codigo" element={< ArtistasActualizar/>}/>

      <Route path="acerca" element={< Acerca/>}/>

      <Route path="*" element={< NoEncontrado/>}/>
    </Routes>
  );
};
