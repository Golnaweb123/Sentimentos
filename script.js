function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    upsetDays: form.upsetDays.value,
    feelingToday: form.feelingToday.value,
    bestPart: form.bestPart.value,
    worstPart: form.worstPart.value,
    nextWeek: form.nextWeek.value,
    fullName: form.fullName.value,
    email: form.email.value,
    phone: form.phone.value
  };

  form.style.display = "none";

  const summary = document.createElement("div");
  summary.classList.add("resumo");

  summary.innerHTML = `
    <div id="resumoConteudo">
      <h2>Resumo dos seus sentimentos</h2>
      <p><strong>Nome:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>CPF:</strong> ${data.phone}</p>
      <p><strong>Dias chateado(a):</strong> ${data.upsetDays}</p>
      <p><strong>Sentimento de hoje:</strong> ${data.feelingToday}</p>
      <p><strong>Melhor parte da semana:</strong> ${data.bestPart}</p>
      <p><strong>Pior parte da semana:</strong> ${data.worstPart}</p>
      <p><strong>Desejo para a próxima semana:</strong> ${data.nextWeek}</p>
      <br>
      <p>✨ Seus dados foram exibidos apenas para você e não foram salvos. Obrigado por compartilhar!</p>
    </div>
    <button onclick="location.reload()">Preencher novamente</button>
    <button onclick="baixarPDF()">Baixar como PDF</button>
  `;

  form.parentElement.appendChild(summary);
}

function baixarPDF() {
  const element = document.getElementById("resumoConteudo");
  html2pdf().from(element).save("resumo-sentimentos.pdf");
}

document.addEventListener("DOMContentLoaded", () => {
  const sky = document.getElementById("sky");
  const cloudNum = 25;

  function createClouds() {
    const cloud = document.createElement("img");
    const size = Math.random() * 300 + 200;
    const duration = Math.random() * 30 + 20;
    const left = Math.random() * window.innerWidth;
    const opacity = Math.random() * 0.5 + 0.5;

    cloud.src = "clouds.png";
    cloud.classList.add("cloud");
    cloud.style.width = size + "px";
    cloud.style.left = left + "px";
    cloud.style.bottom = "-200px"; // começa fora da tela, ainda mais abaixo

    cloud.style.opacity = opacity;
    cloud.style.animationDuration = duration + "s";

    sky.appendChild(cloud);
  }

  for (let i = 0; i < cloudNum; i++) {
    createClouds();
  }
});
