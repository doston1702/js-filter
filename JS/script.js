let arr = [         //Тут array, с ним нужно поработать
  {
    id: Math.random(),
    name: "Timur",
    info: {
      school: "235",
      faculity: "SMM".toLocaleLowerCase(),
    },
  },
  {
    id: Math.random(),
    name: "Imran",
    info: {
      school: "ne izvestno",
      faculity: "programming".toLocaleLowerCase(),
    },
  },
  {
    id: Math.random(),
    name: "Aminjon",
    info: {
      school: "444",
      faculity: "Dizayn".toLocaleLowerCase(),
    },
  },
  {
    id: Math.random(),
    name: "Maxmud",
    info: {
      school: "777",
      faculity: "3dsmax".toLocaleLowerCase(),
    },
  },
  {
    id: Math.random(),
    name: "Muxammad",
    info: {
      school: "5555",
      faculity: "Backend".toLocaleLowerCase(),
    },
  },
  {
    id: Math.random(),
    name: "Timurchik",
    info: {
      school: "235",
      faculity: "SMM".toLocaleLowerCase(),
    },
  },
  {
    id: Math.random(),
    name: "Imranchik",
    info: {
      school: "ne izvestno".toLocaleLowerCase(),
      faculity: "programming".toLocaleLowerCase(),
    },
  },
  {
    id: Math.random(),
    name: "Aminchik",
    info: {
      school: "444",
      faculity: "Dizayn".toLocaleLowerCase(),
    },
  },
  {
    id: Math.random(),
    name: "Maxmudchik",
    info: {
      school: "777",
      faculity: "3dsmax".toLocaleLowerCase(),
    },
  },
];

console.warn("Homework №1");      //Тут я фильтрую faculity

let arr_smm = arr.filter((item) => {
  if (item.info.faculity == "smm") {
    return item
  }
})
console.log("SMM:", arr_smm);

let arr_prog = arr.filter((item) => {
  if (item.info.faculity == "programming") {
    return item
  }
})
console.log("Programming:", arr_prog);

let arr_dizayn = arr.filter((item) => {
  if (item.info.faculity == "dizayn") {
    return item
  }
})
console.log("Dizayn:", arr_dizayn);

let arr_3d = arr.filter((item) => {
  if (item.info.faculity == "3dsmax") {
    return item
  }
})
console.log("3dsmax:", arr_3d);

let arr_back = arr.filter((item) => {
  if (item.info.faculity == "backend") {
    return item
  }
})
console.log("Backend:", arr_back);

console.warn("Homework №2");        //А тут я нахожу пацана без школы

let arr_poisk = arr.find((item) => {
  return item.info.school == "ne izvestno"
})
console.log("Пацан без школы:", arr_poisk);

console.warn("Homework №3");        //А тут я всем добавляю одинаковую фамилию

let arr_surname = arr.map((item) => {
  item.surname = "Petrovich"
  return item
})
console.log(arr_surname);