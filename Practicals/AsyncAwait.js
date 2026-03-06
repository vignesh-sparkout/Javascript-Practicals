function taskPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task completed");
    }, 2000);
  });
}

async function runTask() {
  let result = await taskPromise();
  console.log(result);
}

runTask();