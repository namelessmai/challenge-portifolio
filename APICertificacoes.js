async function cursosAlura() {
  try {
    const resposta = await fetch('https://www.alura.com.br/api/dashboard/5a684cd3f980be5290ed76c3e24367bc81c84a552f17d3b4ef3bf789f8e186fd');
    if (!resposta.ok) {
      throw new Error('Erro ao obter os cursos');
    }
    const dados = await resposta.json();
    const containerCursos = document.getElementById('containerCursos');

    dados.guides.forEach(curso => {
      const cursoDiv = document.createElement('div');
      cursoDiv.classList.add('curso');

      cursoDiv.innerHTML = `
        <span class="curso-name"><strong>Formação:<br></strong> ${curso.name}</span><hr>
        <span class="curso-info"><strong>Último acesso:</strong> ${new Date(curso.lastAccessTime).toLocaleString()}</span><br>
        <span class="curso-info"><strong>Total de cursos:</strong> ${curso.totalCourses}</span><br>
        <span class="curso-info"><strong>Cursos concluídos:</strong> ${curso.finishedCourses}</span><br>
      `;

      containerCursos.appendChild(cursoDiv);

      const cursoProgresses = dados.courseProgresses.filter(progress => progress.slug === curso.slug);
      if (cursoProgresses.length > 0) {
        const progressoDiv = document.createElement('div');
        progressoDiv.classList.add('curso-progress');

        const progressoCurso = cursoProgresses[0];

        progressoDiv.innerHTML = `
          <span class="curso-progress-info"><strong>Curso em progresso:</strong> ${progressoCurso.name}</span><br>
          <span class="curso-progress-info"><strong>Progresso:</strong> ${progressoCurso.progress}%</span><br>
          <span class="curso-progress-info"><strong>Concluído:</strong> ${progressoCurso.finished ? 'Sim' : 'Não'}</span><br>
          
        `;

        containerCursos.appendChild(progressoDiv);
      }
    });
  } catch (erro) {
    console.error(erro);
  }
}

cursosAlura();