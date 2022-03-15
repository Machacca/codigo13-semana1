//*map => crea un nuevo

const arregloCursos = [
    {
      nombre: "React JS",
      tec: "JS",
    },
    {
      nombre: "django",
      tec: "Python",
    },
    {
      nombre: "Angular",
      tec: "JS",
    },
    {
      nombre: "Flask",
      tec: "Python",
    },
    {
      nombre: "Laravel",
      tec: "PHP",
    },
  ];


  const arregloCursos = cursos.filter ((cursos)
  => cursos.tec)

  const filterCursosTec = (arrayCursos, TecFiltro) => {
      return arrayCursos.filter((curso) => curso . tec==TecFiltro)
  }
const cursosJs=arregloCursos.filter((curso)=>curso.tec=="JS")
console.log(cursosJs);
const cursosPython=arregloCursos.filter((curso)=>curso.tec=="Python")
console.log(cursosPython);
const cursosPhp=arregloCursos.filter((curso)=>curso.tec=="PHP")
console.log(cursosPhp);

console.log(curs osJs);
console.log(cursosPython);
console.log(cursosPhp);