const datas = [
    { name: " Suvd", grade: 100 },
    { name: " Anand", grade: 90 },
    { name: "Bold", grade: 78 },
    { name: "Uran", grade: 67 },
    { name: "Temka", grade: 89 },
    { name: "Myangaa", grade: 88 },
    { name: "Ken", grade: 69 },
  ];
  //Нэгдүгээр  бодлогыг бодолт
  function avgGrade(array) {
    let sum = 0;
    array.forEach((el) => {
      sum = sum + el.grade;
    });
    return sum / array.length;
  }
  
  let avg = avgGrade(datas);
  console.log(avg); // Нэг дүгээр бодлого дуусав
  
  // 2 a
  function maxGrade(array) {
    let max = array[0].grade;
  
    array.forEach((el) => {
      if (max < el.grade) {
        max = el.grade;
      }
    });
  
    return max;
  }
  
  console.log(maxGrade(datas));
  // 2 b
  datas.sort((a, b) => {
    return b.grade - a.grade;
  });
  console.log(datas[0]);
  
  //3 бодлого. Нэгдүгээр бодлогын дундаж олох функцыг функц дотор ашигласан
  function greaterAvg(array) {
    let avg = avgGrade(array); // нэгдүгээр бодлогын функцаар дундажын олсон
    let count = 0;
    array.forEach((el) => {
      if (avg < el.grade) {
        count = count + 1;
      }
    });
    return count;
  }
  
  let count = greaterAvg(datas);
  console.log(count);
  
  // 4 бодлого гуравдугаар бодлогын тэмдэгийг солиол болоо
  // 5 бол 2b г sort-ыг ашиглаад шууд хэвлээл болоол
  