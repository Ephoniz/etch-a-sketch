
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('playground');
    let size = 10;
    let equalSize = 100 / size;
    let mouseDown = 0;
    let prevColor = "";
    let color = "black";
    
    updateTextInput = (value = size) => {
        size = value;
        let newEqualSize = 100 / value;
        
        generatePlayground(value, newEqualSize);
    }

    updateColorInput = (value = prevColor) => {
        prevColor = color;
        color = value;
    }

    paintACell = (cellID) => {
        if (mouseDown) {
            let cell = document.getElementById(cellID);
            cell.style.backgroundColor = color;
        }
    }


    generatePlayground = (size, equalSize) => {
        container.innerHTML = "";

        for (let j = 0; j < size; j++) {
            var div = document.createElement('div');
            div.id = 'col';
            div.className = 'col';
    
            for (let i = 0; i < size; i++) {
                var row = document.createElement('div');
                row.id = `row-${j}-${i}`;
                row.className = 'row';
                row.onmousemove = function(){paintACell(this.id)};
                row.onclick = function(){
                    mouseDown = 1;
                    paintACell(this.id);
                    mouseDown = 0;};
                row.style.height = `${equalSize}%`;
    
                console.log(`${equalSize} altura`);
    
                div.appendChild(row);
            }
    
            container.appendChild(div);
        }
    }

    document.body.onmousedown = function() { 
    ++mouseDown;
    }
    document.body.onmouseup = function() {
    --mouseDown;
    }
    
    generatePlayground(size, equalSize);
    
}, false);