while(true) {
    let a = prompt('Введите первое число (для выхода, нажмите "Отмена"):');
    if (!a) {
      alert('До свидания!');
      break;
    }
    let b = prompt('Введите второе число:');
    let operation = prompt('Введите знак операции (+, -, *, /):');
    let result;
  
    if (operation == '+') {
      result = Number(a) + Number(b);
    } else if (operation == '-') {
      result = Number(a) - Number(b);
    } else if (operation == '*') {
      result = Number(a) * Number(b);
    } else if (operation == '/') {
      result = Number(a) / Number(b);
    } else {
      alert('Некорректный знак операции');
      continue;
    }
  
    alert(`Результат: ${result}`);
  }