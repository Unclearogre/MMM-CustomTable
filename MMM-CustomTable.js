/*==============================================================*
 *                                                              *
 * Module Name: MMM-CustomTable                                 *
 * Author:      Roger Sinasohn                                  *
 * Date:        2025-07-31                                      *
 * Description: Creates an simple table with static data.       *
 *                                                              *
 * Change Log                                                   *
 * ----------                                                   *
 * 2025-07-31  RLS  Initial Update.                             *
 *                                                              *
 *==============================================================*/


Module.register("MMM-CustomTable", {

    start: function() {
        this.loaded = false;
        this.updateDom();
    },

    getDom: function() {
        var wrapper = document.createElement("div");

        if (!this.loaded) {
            wrapper.innerHTML = "Loading...";
            return wrapper;
        }

        var table = document.createElement("table");
        table.className = "custom-table";

        if (this.config.tableData && Array.isArray(this.config.tableData)) {
            this.config.tableData.forEach((rowData, rowIndex) => {
                var row = document.createElement("tr");
                rowData.cells.forEach((cellData, colIndex) => {
                    var cell = document.createElement("td");
                    cell.innerHTML = cellData.value;
                    cell.style.fontFamily = cellData.font;
                    cell.style.fontSize = cellData.size;
                    cell.style.color = cellData.color;
                    cell.style.border = this.config.tableStyle ? this.config.tableStyle.border : "1px solid #FFFFFF";
                    cell.style.padding = this.config.tableStyle ? this.config.tableStyle.padding : "8px";
                    cell.style.lineHeight = this.config.tableStyle ? this.config.tableStyle.lineHeight : "8px";

                    if (cellData.bold) cell.style.fontWeight = "bold";
                    if (cellData.italic) cell.style.fontStyle = "italic";
                    if (cellData.underline) cell.style.textDecoration = "underline";
                    
                    if (colIndex < rowData.cells.length - 1) {
                        cell.style.paddingRight = this.config.tableStyle.columnSpacing || "0px";
                    }

                    if (rowIndex < this.config.tableData.length - 1) {
                        cell.style.paddingBottom = this.config.tableStyle.rowSpacing || "0px";
                    }
    

                    row.appendChild(cell);
                });

                table.appendChild(row);
            });
        } else {
            wrapper.innerHTML = "No table data configured.";
        }

        wrapper.appendChild(table);
        return wrapper;
    },

    notificationReceived: function(notification, payload, sender) {
        if (notification === "MODULE_DOM_CREATED") {
            this.loaded = true;
            this.updateDom();
        }
    }
});
