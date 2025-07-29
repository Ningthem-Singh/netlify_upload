## Need to add shape and onclick() need to change size and color with how much time it takes to click the shape in seconds

### for random color

```
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
```

### Using start_time and end_time to get the time taken and dividing by 1000

```
    start_time = new Date().getTime();
```

than checking how much time it took to click

```
    const end_time = new Date().getTime();
    const dump_time = (end_time - start_time) / 1000;
```

### for changing the position of the shape id

```
    function move() {
        const left = Math.random();
        const top = Math.random() * 300;
        const wh = Math.random() * 100 + 100;

        const shape = document.getElementById("shape");
        shape.style.left = left + "px";
        shape.style.top = top + "px";
        shape.style.width = wh + "px";
        shape.style.height = wh + "px";
        shape.style.display = "block";

        start_time = new Date().getTime();
    }
```

and on click i am calling the move() function

```
    const shape = document.getElementById("shape");

    shape.onclick = function () {
        move();
    }
```

Also to avoid calling multiple times the <kbd>document.getElementById("shape")</kbd> I made a

```
const shape=document.getElementById("shape);
```
