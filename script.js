document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu__button");
  const dropdown = document.querySelector(".menu__dropdown");
  const contentContainer = document.querySelector(
    ".contacts__content-container"
  );
  const submitButton = document.getElementById("submitTaskButton");

  let selectedTask = null; // Для збереження вибраного завдання

  const totalTasks = 23;

  // Генеруємо завдання
  for (let i = 1; i <= totalTasks; i++) {
    const taskItem = document.createElement("li");
    taskItem.textContent = `Завдання ${i}`;
    taskItem.dataset.task = i;
    dropdown.appendChild(taskItem);

    const content = document.createElement("div");
    content.classList.add("contacts__content", `contacts__content--${i}`);
    content.innerHTML = `
      <div class="contacts__icon contacts__icon--${i}">${i}</div>
      <img src="img/${i}.png" alt="Image ${i}" class="contacts__image" />
    `;
    contentContainer.appendChild(content);
  }

  menuButton.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });

  dropdown.addEventListener("click", (e) => {
    const clickedTask = e.target.closest("li");
    if (!clickedTask) return;

    selectedTask = clickedTask.dataset.task; // Зберігаємо вибране завдання

    dropdown.classList.remove("active");

    const allContents = document.querySelectorAll(".contacts__content");
    allContents.forEach((content) =>
      content.classList.remove("contacts__content--active")
    );

    const activeContent = document.querySelector(
      `.contacts__content--${selectedTask}`
    );
    if (activeContent) {
      activeContent.classList.add("contacts__content--active");
    }
  });

  submitButton.addEventListener("click", (e) => {
    if (!selectedTask) {
      alert("Будь ласка, виберіть завдання перед відправленням.");
      e.preventDefault();
      return;
    }

    // Перенаправлення на інший сайт із номером завдання
    submitButton.href = `https://boikoschool.github.io/answer/?task=${selectedTask}`;
  });
});
