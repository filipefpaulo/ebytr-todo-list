export function getAllTasks() {
  return fetch('http://localhost:3001/tasks').then((response) =>
    response
      .json()
      .then((data) =>
        response.ok ? Promise.resolve(data) : Promise.reject(data),
      ),
  );
}
