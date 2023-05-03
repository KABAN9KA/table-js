class Table {

    constructor(data) {
        this.data = data;
        this.table = document.createElement("table");
        this.tableBody = document.createElement("tbody");
        this.table.appendChild(this.tableBody);
        this.addRows();
    }
    generateTable() {
        let table = document.createElement("table");
        for (let row of this.data) {
            let tr = document.createElement("tr");
            for (let cell of row) {
                let td = document.createElement("td")
                let text = document.createTextNode(cell);
                td.appendChild(text);
                tr.appendChild(td);
            }
            table.appendChild(tr);
            table.setAttribute("id", "table");
        }
        return table;
    }
     addRows() {
        let btn = document.createElement('button');//создаём нашу кнопку
         let textInBtn = document.createTextNode('add');//создаем текст для кнопки
         btn.appendChild(textInBtn);//добавляем текст в кнопку
         document.body.appendChild(btn);

         btn.onclick = function (){
             let table = document.getElementById('table');
             let rowCount = table.rows.length;
             let cellCount = table.rows[0].cells.length;
             let row = table.insertRow(rowCount);
             for (let i = 0; i <= cellCount; i++) {
                 let cell = 'cell' + i;
                 cell = row.insertCell(i);
                 let copycel = document.getElementById('col' + i).innerHTML;
                 cell.innerHTML = copycel;
             }
        };
    }

}

let data = [
    ["Name", "Age", "Gender"],
    ["Да", "1", "М"],
    ["Нет", "2", "Ж"],
];
    let myTable = new Table(data);
    document.body.appendChild(myTable.generateTable());