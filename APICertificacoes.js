let currentPage = 1;
const coursesPerPage = 5;

async function fetchCourses(page) {
  try {
    const response = await fetch(`https://www.alura.com.br/api/dashboard/b52d1a3d255db9e1e6056b07dcbc500bb40e972ffbb028e3a305702b1819f4eb?page=${page}`);
    if (!response.ok) {
      throw new Error('Erro ao obter os cursos');
    }
    const data = await response.json();
    return data.guides;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function loadCourses() {
  const containerCursos = document.getElementById('containerCursos');
  containerCursos.innerHTML = ''; // Limpa o conteúdo antes de carregar novos cursos

  const courses = await fetchCourses(currentPage);
  courses.forEach(curso => {
    const cursoDiv = document.createElement('div');
    cursoDiv.classList.add('curso');

    cursoDiv.innerHTML = `
      <span class="curso-name"><strong>Formação:<br></strong> ${curso.name}</span><hr>
      <span class="curso-info"><strong>Último acesso:</strong> ${new Date(curso.lastAccessTime).toLocaleString()}</span><br>
      <span class="curso-info"><strong>Total de cursos:</strong> ${curso.totalCourses}</span><br>
      <span class="curso-info"><strong>Cursos concluídos:</strong> ${curso.finishedCourses}</span><br>
    `;

    containerCursos.appendChild(cursoDiv);
  });
}

async function loadMoreCourses() {
  currentPage++; // Incrementa a página atual
  await loadCourses();
}

window.onload = function() {
  loadCourses();
};

document.getElementById('loadMoreBtn').addEventListener('click', loadMoreCourses);
