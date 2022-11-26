// buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");
const texterror = document.getElementById("#texterror");

// initialize the count variable
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
      counter.classList.add("up");

      setTimeout(() => {
        counter.classList.remove("up");
      }, 500);
    } else if (styles.contains("decrease")) 
    {
        if(count <= 0)
        {
            let a = alert('Error:cannot go below 0');
            console.log(a);
            
 
        }
        else
        {
        count--;
        counter.classList.add("down");

        setTimeout(() => {
            counter.classList.remove("down");
        }, 500);
        }
    } 
    else {
      count = 0;
    }

  
   
    counter.textContent = count;
  });
});