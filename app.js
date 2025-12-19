const STORAGE_KEY = "dsa-progress";

function loadState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const state = loadState();
const tbody = document.getElementById("problem-table");

problems.forEach(problem => {
  const row = document.createElement("tr");
  const saved = state[problem.id] || {};

row.innerHTML = `
  <td><input type="checkbox" class="done" ${saved.done ? "checked" : ""}></td>
  <td><a href="${problem.leetcode}" target="_blank">${problem.title}</a></td>
  <td class="${problem.difficulty.toLowerCase()}">${problem.difficulty}</td>
  <td class="pattern">${problem.pattern}</td>
  <td><textarea class="notes" placeholder="Add notes...">${saved.notes || ""}</textarea></td>
  <td><input type="checkbox" class="star" ${saved.star ? "checked" : ""}></td>
`;


  const done = row.querySelector(".done");
  const notes = row.querySelector(".notes");
  const star = row.querySelector(".star");

  done.addEventListener("change", () =>
    update(problem.id, "done", done.checked)
  );

  notes.addEventListener("input", () =>
    update(problem.id, "notes", notes.value)
  );

  star.addEventListener("change", () =>
    update(problem.id, "star", star.checked)
  );

  tbody.appendChild(row);
});

function update(id, key, value) {
  state[id] = state[id] || {};
  state[id][key] = value;
  saveState(state);
}
