// class Table {
//
//     constructor(data) {
//         this.data = data;
//         this.table = document.createElement("table");
//         this.tableBody = document.createElement("tbody");
//         this.table.appendChild(this.tableBody);
//         this.addRows();
//     }
//     generateTable() {
//         let table = document.createElement("table");
//         for (let row of this.data) {
//             let tr = document.createElement("tr");
//             for (let cell of row) {
//                 let td = document.createElement("td")
//                 let text = document.createTextNode(cell);
//                 td.appendChild(text);
//                 tr.appendChild(td);
//             }
//             table.appendChild(tr);
//             table.setAttribute("id", "table");
//             table.setAttribute("contenteditable", "true");
//         }
//         return table;
//     }
//     addRows() {
//         let btn = document.createElement('button');//создаём нашу кнопку
//         let textInBtn = document.createTextNode('add');//создаем текст для кнопки
//         btn.appendChild(textInBtn);//добавляем текст в кнопку
//         document.body.appendChild(btn);
//
//         btn.onclick = function (){
//             let table = document.getElementById( 'table' );
//             let rowCount = table.rows.length;
//             let row = table.insertRow(rowCount),
//                 cell1 = row.insertCell(0),
//                 cell2 = row.insertCell(1),
//                 cell3 = row.insertCell(2);
//             cell1.innerHTML = 'Номер записи';
//             cell2.innerHTML = 'Заголовок';
//             cell3.innerHTML = 'Описание';
//
//
//         };
//     }
// }
//
// let data = [
//     ["Name", "Age", "Gender"],
//     ["Да", "1", "М"],
//     ["Нет", "2", "Ж"],
// ];
// let myTable = new Table(data);
// document.body.appendChild(myTable.generateTable());




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
table.setAttribute("contenteditable", "true");
        }
        return table;
    }
     addRows() {
        let btn = document.createElement('button');//создаём нашу кнопку
         let textInBtn = document.createTextNode('add');//создаем текст для кнопки
         btn.appendChild(textInBtn);//добавляем текст в кнопку
         document.body.appendChild(btn);

         btn.onclick = function (){
             let table = document.getElementById( 'table' );
             let rowCount = table.rows.length;
             let row = table.insertRow(rowCount),
                 cell1 = row.insertCell(0),
                 cell2 = row.insertCell(1),
                 cell3 = row.insertCell(2);
             cell1.innerHTML = '';
             cell2.innerHTML = '';
             cell3.innerHTML = '';


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