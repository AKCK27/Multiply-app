
  const btn = document.getElementById("valid");
  btn.onclick = (e) => {
     e.preventDefault();
     const y = prompt("");
      for (i = 0; i < 10; i++) {5
      const res = y * i;
      document.write("<li>"  + i +' x ' + y  + " ="  + res  + "</li>");
  }
  }
