const n = 100

for (let i = 0; i <= n; i++) {
  if (i % 15 === 0) {
    console.log("FIzzBuzz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else if (i % 3 === 0) {
    console.log("FIzz")
  } else {
    console.log(i)
  }
}
